import { NextResponse } from 'next/server';

export async function GET() {
	const steamReturnTo = `${process.env.NEXT_PUBLIC_SITE_URL}/api/steam/callback`;
	const steamRealm = `${process.env.NEXT_PUBLIC_SITE_URL}/`;

	const params = new URLSearchParams({
		'openid.ns': 'http://specs.openid.net/auth/2.0',
		'openid.mode': 'checkid_setup',
		'openid.return_to': steamReturnTo,
		'openid.realm': steamRealm,
		'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select',
		'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select',
	}).toString();

	return NextResponse.redirect(
		`https://steamcommunity.com/openid/login?${params}`
	);
}
