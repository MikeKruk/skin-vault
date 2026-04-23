import steamApi from '@/lib/steam/steam';
import { createClient } from '@/lib/supabase/server';
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const { searchParams, origin } = new URL(request.url);

  const supabase = await createClient();
	const {
		data: { user },
		error: userError,
	} = await supabase.auth.getUser();

	if (!user || userError) {
		return NextResponse.redirect(`${origin}/profile?error=failed-to-get-user`);
	}

	const verifyParams = new URLSearchParams(searchParams);
	verifyParams.set('openid.mode', 'check_authentication');

	try {
		const verifyResponse = await axios.post(
			'https://steamcommunity.com/openid/login',
			verifyParams.toString(),
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}
		);
		const verifyText = verifyResponse.data;

		if (!verifyText.includes('is_valid:true')) {
			return NextResponse.redirect(
				`${origin}/profile?error=invalid-steam-auth`
			);
		}
	} catch (error) {
		console.error(error);
		return NextResponse.redirect(
			`${origin}/profile?error=steam-verification-failed`
		);
	}

	const claimedId = searchParams.get('openid.claimed_id');
	if (!claimedId) {
		return NextResponse.redirect(`${origin}/profile?error=no-steam-id`);
	}

	const steamId = claimedId.split('/').pop();
	if (!steamId) {
		return NextResponse.redirect(`${origin}/profile?error=invalid-steam-id`);
	}

	let steamProfile;

	try {
		const steamProfileResponse = await steamApi.get(
			`/ISteamUser/GetPlayerSummaries/v2/?key=${process.env.STEAM_API_KEY}&steamids=${steamId}`,
			{ timeout: 5000 }
		);

		steamProfile = steamProfileResponse.data.response.players[0];
	} catch (error) {
		console.error(error);
		return NextResponse.redirect(`${origin}/profile?error=steam-api-failed`);
	}

	if (!steamProfile) {
		return NextResponse.redirect(`${origin}/profile?error=no-steam-profile`);
	}


	const { error } = await supabase.from('steam_profiles').upsert({
		id: user.id,
		steam_id: steamId,
		nickname: steamProfile.personaname,
		avatar_url: steamProfile.avatarfull,
		last_synced: new Date().toISOString(),
	});

	if (error) {
		console.error(error);
		return NextResponse.redirect(
			`${origin}/profile?error=failed-to-sync-steam-profile`
		);
	}

	return NextResponse.redirect(`${origin}/profile?success=steam-profile-synced`);
}
