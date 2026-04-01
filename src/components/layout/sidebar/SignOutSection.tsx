'use client';
import {
	DropdownMenuItem,
	DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { useSidebar } from '@/components/ui/sidebar';
import { PROFILE_QUERY_KEY, USER_QUERY_KEY } from '@/constants/constants';
import signOut from '@/features/auth/sign-out';
import { getFooterLink } from '@/lib/navigation';
import { getQueryClient } from '@/lib/tanstackquery/query-client';
import { LogOutIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';

const profileLink = getFooterLink();

export default function SignOutSection() {
	const { setOpenMobile } = useSidebar();
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
					await signOut();
					getQueryClient().invalidateQueries({ queryKey: [USER_QUERY_KEY] });
					getQueryClient().invalidateQueries({ queryKey: [PROFILE_QUERY_KEY] });
				}}
			>
				<LogOutIcon />
				Sign out
			</DropdownMenuItem>
		</>
	);
}
