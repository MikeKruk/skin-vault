'use client';
import {
	DropdownMenuItem,
	DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { useSidebar } from '@/components/ui/sidebar';
import { getFooterLink } from '@/lib/navigation';
import { LogOutIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import useSignOut from '../hooks/use-sign-out';

const profileLink = getFooterLink();

export default function SignOutSection() {
	const { setOpenMobile } = useSidebar();
	const signOutAction = useSignOut();
	return (
		<>
			<DropdownMenuItem asChild onClick={() => setOpenMobile(false)}>
				<Link href={profileLink?.href ?? '/profile'}>
					<UserIcon /> {profileLink?.label}
				</Link>
			</DropdownMenuItem>

			<DropdownMenuSeparator />

			<DropdownMenuItem
				variant='destructive'
				onClick={async () => {
					setOpenMobile(false);
					await signOutAction();
				}}
			>
				<LogOutIcon />
				Sign out
			</DropdownMenuItem>
		</>
	);
}
