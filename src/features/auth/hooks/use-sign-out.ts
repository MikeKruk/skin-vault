import useClearCache from '@/hooks/use-clear-cache';
import signOut from '../api/sign-out';

export default function useSignOut() {
	const clearCache = useClearCache();
	return async () => {
		await signOut();
		clearCache();
	};
}
