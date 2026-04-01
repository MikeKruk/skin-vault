import { siteConfig } from '@/config/site.config';

export const getFooterLink = () =>
	siteConfig.navItems.find(item => item.group === 'footer');
