'use client';
import { siteConfig } from '@/config/site.config';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarSeparator,
} from '../../ui/sidebar';
import SidebarNavGroup from './SidebarNavGroup';
import SidebarUserFooter from './SidebarUserFooter';

const menuLinks = siteConfig.navItems.filter(item => item.group === 'menu');
const toolsLinks = siteConfig.navItems.filter(item => item.group === 'tools');

export default function AppSidebar() {
	const pathName = usePathname();
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

				<SidebarUserFooter />
			</Sidebar>
		</aside>
	);
}
