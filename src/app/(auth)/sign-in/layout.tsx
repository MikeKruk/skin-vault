import ParticlesBackground from '@/components/layout/sign-in/particles-background';
import React from 'react';

export const metadata = {
	title: 'Sign In - SkinVault',
	robots: { index: false, follow: false },
};

export default function SignInLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='relative flex min-h-svh w-screen items-center justify-center overflow-hidden bg-primary-teal/5'>
			<ParticlesBackground />
			<div className='relative z-10 md:w-full md:max-w-md'>{children}</div>
		</div>
	);
}
