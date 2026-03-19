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
export const siteLinks = [
	{ href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
	{ href: '/market', label: 'Market', icon: ShoppingCart },
	{ href: '/watchlist', label: 'Watchlist', icon: Bookmark },
	{ href: '/players', label: 'Players', icon: Users },
	{ href: '/friends', label: 'Friends', icon: UserCheck },
	{ href: '/grenade-lineup', label: 'Grenade lineup', icon: Target },
	{ href: '/chat', label: 'Assistant', icon: MessageSquare },
	{ href: '/profile', label: 'Profile', icon: User },
];
export const siteConfig = {
	title: 'Skin vault',
	description: 'CS2 Stats & Market Hub',
	navItems: siteLinks,
};

export type NavItem = (typeof siteConfig.navItems)[number];
