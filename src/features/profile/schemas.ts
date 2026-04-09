import * as z from 'zod';
export const usernameSchema = z.object({
	username: z
		.string()
		.max(70, 'Nickname cannot be longer than 100 characters')
		.min(1, 'Nickname cannot be empty'),
    
});

export type usernameSchema = z.infer<typeof usernameSchema>;
