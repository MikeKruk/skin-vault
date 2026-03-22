import AppSidebar from '@/components/layout/sidebar/appSidebar';
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import React from 'react';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<TooltipProvider>
			<SidebarProvider>
				<AppSidebar />
				<SidebarInset>
					<header className='flex h-14 items-center justify-end px-4 md:hidden'>
						<SidebarTrigger />
					</header>
					{children}
				</SidebarInset>
			</SidebarProvider>
		</TooltipProvider>
	);
}
