'use client';
import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldGroup } from '@/components/ui/field';
import useSteamProfile from '@/features/steam/hooks/use-steam-profile';
import useUser from '@/features/user/hooks/use-user';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import useProfile from '../hooks/use-profile';
import useProfileUpdate from '../hooks/use-profile-update';
import { usernameSchema } from '../schemas';
import EmailInput from './EmailInput';
import UsernameInput from './UsernameInput';
import UsernameInputWithSteam from './UsernameInputWithSteam';

export default function ProfileHeader() {
	const { data: profile } = useProfile();
	const { data: steamProfile } = useSteamProfile();
	const { data: user } = useUser();
	const mutation = useProfileUpdate();
	const form = useForm<usernameSchema>({
		resolver: zodResolver(usernameSchema),
		defaultValues: {
			username: '',
		},
	});

	const { reset, formState } = form;

	useEffect(() => {
		reset({
			username: steamProfile?.nickname ?? profile?.username ?? '',
		});
	}, [steamProfile?.nickname, profile?.username, reset]);

	async function onSubmit(data: usernameSchema) {
		await mutation.mutateAsync(data.username);
	}

	return (
		<form
			onSubmit={form.handleSubmit(onSubmit)}
			noValidate
			aria-label='profile-form'
			className='flex flex-col justify-center gap-4'
		>
			<EmailInput email={user?.email ?? ''} />
			{steamProfile ? (
				<UsernameInputWithSteam steamProfileNickname={steamProfile.nickname} />
			) : (
				<Controller
					control={form.control}
					name='username'
					render={({ field, fieldState }) => (
						<FieldGroup>
							<Field data-invalid={fieldState.invalid}>
								<UsernameInput field={field} fieldState={fieldState} />
								{fieldState.error && (
									<FieldError id='username-error' className=''>
										{fieldState.error.message}
									</FieldError>
								)}
							</Field>
						</FieldGroup>
					)}
				/>
			)}
			<Button
				className='w-full bg-transparent'
				variant={'teal'}
				type='submit'
				disabled={formState.isSubmitting || !formState.isDirty}
			>
				{formState.isSubmitting ? 'Saving...' : 'Save'}
			</Button>
		</form>
	);
}
