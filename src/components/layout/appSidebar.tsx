'use client';
import { siteConfig } from '@/config/site.config';
import { sliceName } from '@/lib/string';
import { LogOut } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarSeparator,
} from '../ui/sidebar';

const menuLinks = siteConfig.navItems.filter(
	item =>
		item.href !== '/profile' &&
		item.href !== '/chat' &&
		item.href !== '/grenade-lineup'
);
const toolsLinks = siteConfig.navItems.filter(
	item =>
		(item.href !== '/profile' && item.href === '/chat') ||
		item.href === '/grenade-lineup'
);
const profileLink = siteConfig.navItems.find(item => item.href === '/profile');

export default function AppSidebar() {
	return (
		<Sidebar>
			<nav aria-label='Main navigation' className='flex flex-col h-full'>
				<SidebarHeader className='flex flex-row items-center justify-center'>
					<Image
						src={'/logo.svg'}
						width={32}
						height={32}
						alt={'App Icon'}
						priority
					/>{' '}
					<div>
						<div className='text-sm font-bold text-white'>
							skin<span className='text-[#00C9B1]'>vault</span>
						</div>
						<div className='text-[9px] text-muted-foreground tracking-widest uppercase'>
							CS2 Market
						</div>
					</div>
				</SidebarHeader>
				<SidebarSeparator className='m-0' />
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Menu</SidebarGroupLabel>
						<SidebarMenu>
							{menuLinks.map(item => (
								<SidebarMenuItem key={item.href}>
									<SidebarMenuButton asChild>
										<Link href={item.href}>
											<item.icon />
											{item.label}
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroup>
					<SidebarSeparator className='m-0' />
					<SidebarGroup>
						<SidebarGroupLabel>Tools</SidebarGroupLabel>
						<SidebarMenu>
							{toolsLinks.map(item => (
								<SidebarMenuItem key={item.href}>
									<SidebarMenuButton asChild>
										<Link href={item.href}>
											<item.icon />
											{item.label}
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
				<SidebarSeparator className='m-0' />
				<SidebarFooter>
					<SidebarMenu className='flex flex-row justify-between'>
						<SidebarMenuItem>
							<SidebarMenuButton asChild>
								<Link href={profileLink?.href ?? '/profile'}>
									<Avatar>
										{/* //TODO: add avatar src */}
										<AvatarImage alt='avatar'></AvatarImage>
										<AvatarFallback>{sliceName('mikeixv')}</AvatarFallback>
									</Avatar>
									{/* имя и ранг */}
									<div className='flex flex-col'>
										<span className='text-xs font-semibold'>mikeixv</span>
										<span className='text-[10px] text-muted-foreground'>
											Gold Nova III
										</span>
									</div>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>

						<SidebarMenuItem>
							<SidebarMenuButton>
								<LogOut />
								<span>Logout</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarFooter>
			</nav>
		</Sidebar>
	);
}
