import { PROFILE_QUERY_KEY } from '@/constants/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import updateProfileUserName from '../api/update-profile-username';

export default function useProfileUpdate() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (username: string) => {
			const { data, error } = await updateProfileUserName(username);

			if (error) {
				throw new Error(error);
			}

			return data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [PROFILE_QUERY_KEY] });
		},
	});
}
