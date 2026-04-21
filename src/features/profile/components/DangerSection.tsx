import DeleteSteamSyncDialog from '@/features/steam/components/DeleteSteamSyncDialog';
import DeleteUserDialog from '@/features/user/components/DeleteUserDialog';

export default function DangerSection() {
	return (
		<>
			<DeleteSteamSyncDialog />
			<DeleteUserDialog />
		</>
	);
}
