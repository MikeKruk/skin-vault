import {
	PROFILE_QUERY_KEY,
	STEAM_PROFILE_QUERY_KEY,
	USER_QUERY_KEY,
} from '@/constants/constants';
import { useQueryClient } from '@tanstack/react-query';
import signOut from '../api/sign-out';

export default function useSignOut() {
	const queryClient = useQueryClient();
	return async () => {
		await signOut();
		queryClient.setQueriesData({ queryKey: [USER_QUERY_KEY] }, null);
		queryClient.setQueriesData({ queryKey: [PROFILE_QUERY_KEY] }, null);
		queryClient.setQueriesData({ queryKey: [STEAM_PROFILE_QUERY_KEY] }, null);
	};
}
