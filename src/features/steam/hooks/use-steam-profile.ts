import { STEAM_PROFILE_QUERY_KEY } from '@/constants/constants';
import { useQuery } from '@tanstack/react-query';
import getSteamProfile from '../api/get-steam-profile';

export default function useSteamProfile() {
	return useQuery({
		queryKey: [STEAM_PROFILE_QUERY_KEY],
		queryFn: async () => {
			const { data, error } = await getSteamProfile();

			if (error) {
				throw new Error(error);
			}

			return data;
		},
		staleTime: 1000 * 60 * 60 * 24,
	});
}
