const STEAM_SYNC_ERROR_MESSAGES = {
	'failed-to-get-user': 'Unable to get your account data.',
	'invalid-steam-auth': 'Steam authentication failed.',
	'steam-verification-failed': 'We couldn’t verify your Steam account.',
	'no-steam-id': 'Steam ID not found.',
	'invalid-steam-id': 'Invalid Steam ID. Please reconnect your account.',
	'invalid-steam-profile': 'We couldn’t load your Steam profile.',
	'steam-api-failed': 'Steam is currently unavailable.',
	'no-steam-profile': 'Steam profile not found.',
	'failed-to-sync-steam-profile':
		'Failed to sync your Steam profile. Please try again.',
} as const;

const GOOGLE_SIGN_IN_ERROR_MESSAGES = {
	'auth-code-missing': 'Invalid authentication link.',
	'auth-code-error': 'Authentication failed. Please try again.',
} as const;

export { GOOGLE_SIGN_IN_ERROR_MESSAGES, STEAM_SYNC_ERROR_MESSAGES };
