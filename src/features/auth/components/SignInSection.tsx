'use client';
import {
	DropdownMenuItem,
	DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { useSidebar } from '@/components/ui/sidebar';
import { getFooterLink } from '@/lib/navigation';
import { LogInIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const profileLink = getFooterLink();

export default function SignInSection() {
	const { setOpenMobile } = useSidebar();
	return (
		<>
			<DropdownMenuItem asChild onClick={() => setOpenMobile(false)}>
				<Link href={profileLink?.href ?? '/profile'}>
					<UserIcon /> {profileLink?.label}
				</Link>
			</DropdownMenuItem>

			<DropdownMenuSeparator />

			<DropdownMenuItem onClick={() => redirect('/sign-in')}>
				<LogInIcon />
				Sign in
			</DropdownMenuItem>
		</>
	);
}
