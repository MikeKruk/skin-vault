import { PROFILE_QUERY_KEY } from '@/constants/constants';
import { useQuery } from '@tanstack/react-query';
import getProfile from '../api/get-profile';

export default function useProfile() {
	return useQuery({
		queryKey: [PROFILE_QUERY_KEY],
		queryFn: async () => {
			const { data, error } = await getProfile();

			if (error) {
				throw new Error(error);
			}

			return data;
		},
	});
}
