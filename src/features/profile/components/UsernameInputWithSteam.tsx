import { FloatingLabelInput } from '@/components/ui/floating-label-input';
import MobileTooltip from '@/components/ui/mobile-tooltip';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { useIsMobile } from '@/hooks/use-mobile';

interface UsernameInputProps {
	steamProfileNickname: string;
}

export default function UsernameInputWithSteam({
	steamProfileNickname,
}: UsernameInputProps) {
	const isMobile = useIsMobile();
	const userInputWithSteamProfile = (
		<FloatingLabelInput
			type='text'
			id='username'
			label='Nickname'
			value={steamProfileNickname}
			readOnly
			className='text-muted-foreground cursor-not-allowed focus:border-[#00C9B1]'
		/>
	);

	return isMobile ? (
		<MobileTooltip content='Nickname cannot be changed'>
			{userInputWithSteamProfile}
		</MobileTooltip>
	) : (
		<Tooltip>
			<TooltipTrigger asChild>{userInputWithSteamProfile}</TooltipTrigger>
			<TooltipContent>Nickname cannot be changed</TooltipContent>
		</Tooltip>
	);
}
