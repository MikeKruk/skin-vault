import { Popover, PopoverContent, PopoverTrigger } from './popover';

interface MobileTooltipProps {
	children: React.ReactNode;
	content: string;
}
export default function MobileTooltip({
	children,
	content,
}: MobileTooltipProps) {
	return (
		<Popover>
			<PopoverTrigger asChild>{children}</PopoverTrigger>

			<PopoverContent
				side='top'
				align='center'
				className='w-max border border-primary-teal/50'
			>
				{content}
			</PopoverContent>
		</Popover>
	);
}
