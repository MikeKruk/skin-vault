import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReduxProvider from './redux-provider';
import TanstakqueryProvider from './tanstackquery-provider';
import ThemeProvider from './theme-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ReduxProvider>
			<TanstakqueryProvider>
				<ThemeProvider>
					{children}
					<ReactQueryDevtools initialIsOpen={false} />
				</ThemeProvider>
			</TanstakqueryProvider>
		</ReduxProvider>
	);
}
