import {
	Bookmark,
	LayoutDashboard,
	MessageSquare,
	ShoppingCart,
	Target,
	User,
	UserCheck,
	Users,
} from 'lucide-react';

export const HOME_ROUTE = '/' as const;
const siteLinks = [
	{
		href: '/dashboard',
		label: 'Dashboard',
		icon: LayoutDashboard,
		group: 'menu',
	},
	{ href: '/market', label: 'Market', icon: ShoppingCart, group: 'menu' },
	{ href: '/watchlist', label: 'Watchlist', icon: Bookmark, group: 'menu' },
	{ href: '/players', label: 'Players', icon: Users, group: 'menu' },
	{ href: '/friends', label: 'Friends', icon: UserCheck, group: 'menu' },
	{
		href: '/grenade-lineup',
		label: 'Grenade lineup',
		icon: Target,
		group: 'tools',
	},
	{ href: '/chat', label: 'Assistant', icon: MessageSquare, group: 'tools' },
	{ href: '/profile', label: 'Profile', icon: User, group: 'footer' },
] as const;
export const siteConfig = {
	title: 'Skin vault',
	description: 'CS2 Stats & Market Hub',
	navItems: siteLinks,
} as const;

export type NavGroup = (typeof siteLinks)[number]['group'];
export type NavItem = (typeof siteConfig.navItems)[number];
