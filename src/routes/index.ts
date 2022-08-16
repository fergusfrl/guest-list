import type { Guest } from 'src/types';

const dedupeGuests = (guests: Guest[]): Guest[] => {
	const emailArray = guests.map((guest) => guest.email);
	const emailSet = new Set(emailArray);

	const dedpuedGuests: Guest[] = [];

	emailSet.forEach((email) => {
		const uniqueGuest = guests.find((guest) => guest.email === email);
		if (uniqueGuest) {
			dedpuedGuests.push(uniqueGuest);
		}
	});

	return dedpuedGuests;
};

export const GET = async () => {
	const response = await fetch(
		'https://us-central1-test-database-200da.cloudfunctions.net/getGuests'
	);
	const guests = (await response.json()) as Guest[];
	const dedupedGuests = dedupeGuests(guests).sort((a, b) => (a.name >= b.name ? 1 : -1));

	return {
		status: 200,
		body: {
			guests: dedupedGuests,
			guestCount: dedupedGuests.length
		}
	};
};
