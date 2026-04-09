import { FloatingLabelInput } from '@/components/ui/floating-label-input';
import { cn } from '@/lib/utils';
import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import { usernameSchema } from '../schemas';

interface UsernameInputProps {
	field?: ControllerRenderProps<usernameSchema, 'username'>;
	fieldState: ControllerFieldState;
}

export default function UsernameInput({
	field,
	fieldState,
}: UsernameInputProps) {
	return (
		<FloatingLabelInput
			type='text'
			id='username'
			label='Nickname'
			aria-describedby={fieldState.error ? 'username-error' : undefined}
			aria-invalid={fieldState.invalid}
			className={cn(
				fieldState.error
					? 'focus:border-destructive border-destructive'
					: 'focus:border-[#00C9B1]'
			)}
			{...field}
		/>
	);
}
