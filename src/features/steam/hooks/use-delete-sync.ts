import { STEAM_PROFILE_QUERY_KEY } from '@/constants/constants';
import useUser from '@/features/user/hooks/use-user';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import deleteSteamSync from '../api/delete-steam-sync';

export default function useDeleteSync() {
	const { data: user } = useUser();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async () => {
			if (!user?.id) {
				throw new Error('User not found');
			}
			const { data, error } = await deleteSteamSync(user!.id);

			if (error) {
				throw new Error(error);
			}

			return data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [STEAM_PROFILE_QUERY_KEY, user?.id],
			});
			toast.success('Sync deleted', {
				description: 'Your Steam sync has been deleted.',
			});
		},
		onError: (error: Error) => {
			toast.error('Failed to delete sync', {
				description: error.message ?? 'Please try again.',
			});
		},
	});
}
