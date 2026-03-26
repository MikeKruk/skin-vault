'use client';
import { NavItem } from '@/config/site.config';
import Link from 'next/link';
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '../../ui/sidebar';

interface SidebarNavGroupProps {
	label: string;
	items: NavItem[];
	pathname: string;
}

export default function SidebarNavGroup({
	label,
	items,
	pathname,
}: SidebarNavGroupProps) {
	const { setOpenMobile } = useSidebar();
	return (
		<SidebarGroup>
			<SidebarGroupLabel className='text-[10px] tracking-widest uppercase text-muted-foreground/50'>
				{label}
			</SidebarGroupLabel>
			<SidebarMenu className='flex flex-col gap-2'>
				{items.map(item => (
					<SidebarMenuItem key={item.href}>
						<SidebarMenuButton
							className='
                h-10 
                text-[#32dbc7]/50
                data-[active=true]:bg-primary-teal/10
                data-[active=true]:border-[0.7px]
                data-[active=true]:border-primary-teal50
                data-[active=true]:text-primary-teal
                hover:bg-primary-teal/10
                hover:text-primary-teal
                hover:scale-105
                active:bg-transparent
                active:text-primary-teal
                '
							asChild
							isActive={pathname === item.href}
							onClick={() => setOpenMobile(false)}
						>
							<Link href={item.href}>
								<item.icon />
								{item.label}
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
