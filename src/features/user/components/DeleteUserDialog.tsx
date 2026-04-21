'use client';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import useDeleteUser from '../hooks/use-delete-user';

export default function DeleteUserDialog() {
	const mutation = useDeleteUser();
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant='destructive'>Delete Account</Button>
			</AlertDialogTrigger>

			<AlertDialogContent size='sm'>
				<AlertDialogHeader>
					<AlertDialogTitle>Delete Account</AlertDialogTitle>
					<AlertDialogDescription>
						This will permanently delete your account and all data. This action
						cannot be undone.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter className='border-t-[0.5px]'>
					<AlertDialogCancel variant='outline'>Cancel</AlertDialogCancel>
					<AlertDialogAction
						variant='destructive'
						onClick={() => mutation.mutate()}
						disabled={mutation.isPending}
					>
						Delete
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
