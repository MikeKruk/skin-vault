import { STEAM_PROFILE_QUERY_KEY } from '@/constants/constants';
import useUser from '@/features/user/hooks/use-user';
import { useQuery } from '@tanstack/react-query';
import getSteamProfile from '../api/get-steam-profile';

export default function useSteamProfile() {
	const { data: user } = useUser();
	return useQuery({
		queryKey: [STEAM_PROFILE_QUERY_KEY, user?.id],
		queryFn: async () => {
			const { data, error } = await getSteamProfile(user?.id || '');

			if (error) {
				throw new Error(error);
			}

			return data;
		},
		staleTime: 1000 * 60 * 60 * 24,
		enabled: !!user,
	});
}
