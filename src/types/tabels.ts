import { Tables } from './database.types';

type Profile = Tables<'profiles'>;
type SteamProfile = Tables<'steam_profiles'>;

export type { Profile, SteamProfile };
