'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { siteConfig } from '@/config/site.config';
import { sliceName } from '@/lib/string';
import { ChevronsUpDown, LogOutIcon, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarSeparator,
	useSidebar,
} from '../../ui/sidebar';
import SidebarNavGroup from './sidebar-nav-group';
import signOut from '@/features/auth/sign-out';

const menuLinks = siteConfig.navItems.filter(item => item.group === 'menu');
const toolsLinks = siteConfig.navItems.filter(item => item.group === 'tools');
const profileLink = siteConfig.navItems.find(item => item.group === 'footer');

export default function AppSidebar() {
	//Для тестов
	const router = useRouter();
	const pathName = usePathname();
	const { setOpenMobile } = useSidebar();
	return (
		<aside>
			<Sidebar collapsible='offcanvas' className='border-r-sidebar-border'>
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
							skin<span className='text-primary-teal'>vault</span>
						</div>
						<div className='text-[9px] text-muted-foreground tracking-widest uppercase'>
							CS2 Market
						</div>
					</div>
				</SidebarHeader>

				<SidebarSeparator className='m-0 bg-primary-teal/50' />

				<SidebarContent>
					<nav aria-label='Main navigation'>
						<SidebarNavGroup
							label='menu'
							items={menuLinks}
							pathname={pathName}
						/>
						<SidebarSeparator className='m-0 bg-primary-teal/50' />
						<SidebarNavGroup
							label='tools'
							items={toolsLinks}
							pathname={pathName}
						/>
					</nav>
				</SidebarContent>

				<SidebarSeparator className='m-0 bg-primary-teal/50' />

				<SidebarFooter>
					<SidebarMenu>
						<SidebarMenuItem>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<SidebarMenuButton
										suppressHydrationWarning
										size='lg'
										className='
                      flex flex-row justify-between
                      h-15
                    bg-[#42978d]/10
                      border-[0.7px]
                      border-primary-teal/50
                      hover:bg-primary-teal/10
                      active:bg-primary-teal/30
                    '
									>
										<div className='flex flex-row gap-2'>
											<Avatar>
												{/* //TODO: add avatar src */}
												<AvatarImage alt='avatar'></AvatarImage>
												<AvatarFallback className='bg-transparent border border-primary-teal text-primary-teal text-xs'>
													{sliceName('mikeixv')}
												</AvatarFallback>
											</Avatar>

											{/* имя и ранг */}
											<div className='flex flex-col'>
												<span className='text-xs font-semibold'>mikeixv</span>
												<span className='text-[10px] text-muted-foreground'>
													Gold Nova III
												</span>
											</div>
										</div>
										<ChevronsUpDown className='size-4 text-muted-foreground' />
									</SidebarMenuButton>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									onCloseAutoFocus={event => event.preventDefault()}
								>
									<DropdownMenuItem
										asChild
										onClick={() => setOpenMobile(false)}
									>
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
											router.push('/sign-in');
										}}
									>
										<LogOutIcon />
										Log out
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarFooter>
			</Sidebar>
		</aside>
	);
}
