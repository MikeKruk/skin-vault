export function convertDate(value: string) {
	const date = new Date(value);

	const formattedDate = new Intl.DateTimeFormat('en-En', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	}).format(date);

	return formattedDate;
}
