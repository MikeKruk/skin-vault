import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import signInWithEmail from '../api/sign-in-with-email';

export default function useSignInWithEmail() {
	return useMutation({
		mutationFn: async (email: string) => {
			const { data, error } = await signInWithEmail({ email });

			if (error) {
				throw new Error(error);
			}

			return data;
		},
		onSuccess: () => {
			toast.success('Check your email', {
				description: 'We have sent you a magic link to sign in.',
			});
		},
		onError: (error: Error) => {
			toast.error('Failed to send email', {
				description: error.message ?? 'Please try again.',
			});
		},
	});
}
