import { useQuery } from '@tanstack/react-query';
import getProfile from '../api/get-profile';
import { PROFILE_QUERY_KEY } from '@/constants/constants';

export default function useProfile() {
	return useQuery({
		queryKey: [PROFILE_QUERY_KEY],
		queryFn: getProfile,
	});
}
