import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	SidebarFooter,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Skeleton } from '@/components/ui/skeleton';
import useProfile from '@/features/profile/hooks/use-profile';
import useUser from '@/features/user/hooks/use-user';
import { sliceName } from '@/lib/string';
import { ChevronsUpDown } from 'lucide-react';
import SignInSection from './SignInSection';
import SignOutSection from './SignOutSection';

export default function SidebarUserFooter() {
	const { data: profile, isLoading: isLoadingProfile } = useProfile();
	const { isAuthenticated } = useUser();
	return (
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
									{isLoadingProfile ? (
										<>
											<Skeleton className='h-8 w-8 rounded-full' />
											<div className='flex flex-col gap-1'>
												<Skeleton className='h-4 w-16' />
												<Skeleton className='h-3 w-12' />
											</div>
										</>
									) : (
										<>
											<Avatar>
												<AvatarImage
													alt='avatar'
													src={profile?.avatar_url ?? undefined}
												></AvatarImage>
												<AvatarFallback className='bg-transparent border border-primary-teal text-primary-teal text-xs'>
													{sliceName(profile?.username ?? 'guest')}
												</AvatarFallback>
											</Avatar>

											{/* имя и ранг */}
											<div className='flex flex-col'>
												<span className='text-xs font-semibold capitalize'>
													{profile?.username ?? 'guest'}
												</span>
												<span className='text-[10px] text-muted-foreground'>
													Gold Nova III
												</span>
											</div>
										</>
									)}
								</div>
								<ChevronsUpDown className='size-4 text-muted-foreground' />
							</SidebarMenuButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							onCloseAutoFocus={event => event.preventDefault()}
						>
							{isAuthenticated ? <SignOutSection /> : <SignInSection />}
						</DropdownMenuContent>
					</DropdownMenu>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarFooter>
	);
}
