type Result<T> = { data: T; error: null } | { data: null; error: string };

type ResultNullable<T> =
	| { data: T | null; error: null }
	| { data: null; error: string };

export type { Result, ResultNullable };
