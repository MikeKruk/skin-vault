
import AppSidebar from '@/components/layout/sidebar/AppSidebar';
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
				<SidebarInset className='px-2 md:p-2 flex flex-col min-h-screen bg-background-content'>
					<header className='flex h-14 items-center justify-end px-4 md:hidden'>
						<SidebarTrigger />
					</header>
					{children}
				</SidebarInset>
			</SidebarProvider>
		</TooltipProvider>
	);
}
