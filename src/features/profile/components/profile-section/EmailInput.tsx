import { FloatingLabelInput } from '@/components/ui/floating-label-input';
import MobileTooltip from '@/components/ui/mobile-tooltip';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { useIsMobile } from '@/hooks/use-mobile';

export default function EmailInput({ email }: { email: string }) {
	const isMobile = useIsMobile();
	const emailInput = (
		<FloatingLabelInput
			type='text'
			id='email'
			value={email}
			label='Email'
			readOnly
			className='text-muted-foreground cursor-not-allowed focus:border-[#00C9B1]'
		/>
	);
	return isMobile ? (
		<MobileTooltip content='This email cannot be changed'>
			{emailInput}
		</MobileTooltip>
	) : (
		<Tooltip>
			<TooltipTrigger asChild>{emailInput}</TooltipTrigger>
			<TooltipContent className='bg-popover text-popover-foreground border border-primary-teal/50'>
				This email cannot be changed
			</TooltipContent>
		</Tooltip>
	);
}
