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
import useDeleteSync from '../hooks/use-delete-sync';
import useSteamProfile from '../hooks/use-steam-profile';

export default function DeleteSteamSyncDialog() {
	const { data: steamProfile } = useSteamProfile();
	const mutation = useDeleteSync();

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant='destructive' disabled={!steamProfile}>
					Disconnect Steam
				</Button>
			</AlertDialogTrigger>

			<AlertDialogContent size='sm'>
				<AlertDialogHeader>
					<AlertDialogTitle>Disconnect Steam account</AlertDialogTitle>
					<AlertDialogDescription>
						This will remove your Steam connection from your account. You can
						reconnect it at any time.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter className='border-t-[0.5px]'>
					<AlertDialogCancel variant='outline'>Cancel</AlertDialogCancel>
					<AlertDialogAction
						variant='destructive'
						onClick={() => mutation.mutate()}
            disabled={mutation.isPending}
					>
						Disconnect
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
