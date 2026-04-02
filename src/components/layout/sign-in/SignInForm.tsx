'use client';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { Field, FieldError, FieldGroup } from '@/components/ui/field';
import { FloatingLabelInput } from '@/components/ui/floating-label-input';
import { Separator } from '@/components/ui/separator';
import { emailSchema, EmailSchema } from '@/features/auth/schemas';
import signInWithEmail from '@/features/auth/sign-in-with-email';
import signInWithGoogle from '@/features/auth/sign-in-with-google';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';

export default function SignInForm() {
	const form = useForm<EmailSchema>({
		resolver: zodResolver(emailSchema),
		defaultValues: {
			email: '',
		},
	});
	async function onSubmit(data: EmailSchema) {
		const result = await signInWithEmail({ email: data.email });
		if (result.error) {
			form.setError('email', { message: result.error });
		}
	}
	return (
		<Card className='w-full sm:max-w-md ring-sidebar-border md:px-4'>
			<CardHeader className='flex flex-col gap-4 md:gap-6'>
				<div className='flex flex-row items-center gap-2'>
					<Image
						src={'/logo.svg'}
						width={50}
						height={50}
						alt={'SkinVault logo'}
					/>{' '}
					<div>
						<div className='text-sm font-bold text-white'>
							skin<span className='text-primary-teal'>vault</span>
						</div>
						<div className='text-[9px] text-muted-foreground tracking-widest uppercase'>
							CS2 Market
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-1'>
					<h1 className='font-semibold text-lg'>Sign In</h1>
					<CardDescription className='text-teal-muted'>
						Don&apos;t have an account? One will be created automatically
					</CardDescription>
				</div>
			</CardHeader>

			<CardContent>
				<Button
					className='w-full bg-transparent flex gap-3'
					variant={'teal'}
					onClick={async () => await signInWithGoogle()}
					aria-label='Sign in with Google'
				>
					<Image
						src={'/google.svg'}
						width={20}
						height={20}
						alt={'Google Icon'}
					/>
					Sign in with Google
				</Button>

				<div className='flex items-center gap-3 w-full my-4'>
					<Separator className='flex-1' />
					<span className='text-muted-foreground text-sm'>or</span>
					<Separator className='flex-1' />
				</div>

				<form
					onSubmit={form.handleSubmit(onSubmit)}
					noValidate
					aria-label='Sign in form'
					className='flex flex-col gap-4'
				>
					<Controller
						name='email'
						control={form.control}
						render={({ field, fieldState }) => (
							<FieldGroup>
								<Field data-invalid={fieldState.invalid}>
									<FloatingLabelInput
										type='email'
										id='email'
										label='Email'
										aria-describedby={
											fieldState.error ? 'email-error' : undefined
										}
										className={cn(
											fieldState.error
												? 'focus:border-destructive border-destructive'
												: 'focus:border-[#00C9B1]'
										)}
										{...field}
									></FloatingLabelInput>
								</Field>
								{fieldState.error && (
									<FieldError errors={[fieldState.error]} id='email-error' />
								)}
							</FieldGroup>
						)}
					/>

					<Button
						className='w-full bg-transparent'
						variant={'teal'}
						type='submit'
					>
						Send magic link
					</Button>
				</form>
			</CardContent>

			<CardFooter className='border-none flex flex-col'>
				<p className='text-center text-teal-muted w-full'>
					We&apos;ll send a magic link to your email.{' '}
				</p>
				<p className='text-primary-teal/80 font-medium'>
					No passwords. No extra steps.
				</p>
			</CardFooter>
		</Card>
	);
}
