import useClearCache from '@/hooks/use-clear-cache';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import deleteUser from '../server/delete-user';

export default function useDeleteUser() {
	const clearCache = useClearCache();
	return useMutation({
		mutationFn: async () => {
			const result = await deleteUser();
			if (result.error) {
				throw new Error(result.error);
			}
			return result.data;
		},
		onSuccess: () => {
			clearCache();
			toast.success('Account deleted', {
				description: 'Your account has been deleted.',
			});
		},
	});
}
