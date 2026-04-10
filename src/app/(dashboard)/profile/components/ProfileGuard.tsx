'use client';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import useUser from '@/features/user/hooks/use-user';
import Link from 'next/link';

export default function ProfileGuard({
	children,
}: {
	children: React.ReactNode;
}) {
	const { data: user, isLoading } = useUser();

	if (isLoading) {
		return (
			<div className='flex flex-col gap-4 justify-center items-center'>
				<Skeleton className='text-center h-6 w-full' />
				<Skeleton className='text-center h-6 w-full' />
        <Separator />
				<Skeleton className='text-center h-6 w-full' />
				<Skeleton className='text-center h-6 w-90' />
        <Separator />
			</div>
		);
	}

	if (!user) {
		return (
			<div className='flex flex-col gap-4 justify-center items-center'>
				<p className='text-center text-teal-muted w-full'>
        You need to be signed in to access your profile
				</p>
				<Button asChild className='max-w-xs w-full bg-transparent' variant={'teal'}>
					<Link href={'/sign-in'}>Sign in</Link>
				</Button>
			</div>
		);
	}

	return <>{children}</>;
}
