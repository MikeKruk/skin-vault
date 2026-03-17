import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReduxProvider from './redux-provider';
import TanstakqueryProvider from './tanstackquery-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ReduxProvider>
			<TanstakqueryProvider>
				{children}
				<ReactQueryDevtools initialIsOpen={false} />
			</TanstakqueryProvider>
		</ReduxProvider>
	);
}
