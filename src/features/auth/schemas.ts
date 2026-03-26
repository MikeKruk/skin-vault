import * as z from 'zod';
export const emailSchema = z.object({
	email: z.string().trim().toLowerCase().pipe(z.email('Invalid email address')),
});

export type EmailSchema = z.infer<typeof emailSchema>;
