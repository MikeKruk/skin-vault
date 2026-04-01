import { useQuery } from '@tanstack/react-query';
import { USER_QUERY_KEY } from '../../../constants/constants';
import getUser from '../api/get-user';

export default function useUser() {
	const query = useQuery({
		queryKey: [USER_QUERY_KEY],
		queryFn: getUser,
	});

	return {
		user: query.data,
		isAuthenticated: !!query.data,
	};
}
