import { PROFILE_QUERY_KEY } from '@/constants/constants';
import useUser from '@/features/user/hooks/use-user';
import { useQuery } from '@tanstack/react-query';
import getProfile from '../api/get-profile';

export default function useProfile() {
	const { data: user } = useUser();
	return useQuery({
		queryKey: [PROFILE_QUERY_KEY, user?.id],
		queryFn: async () => {
			const { data, error } = await getProfile(user!.id);

			if (error) {
				throw new Error(error);
			}

			return data;
		},
		enabled: !!user,
	});
}
