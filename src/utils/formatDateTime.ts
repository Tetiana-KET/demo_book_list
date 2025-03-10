import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

export function formatDateTime(dateInput: string | Date): string {
	const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	const zonedDate = toZonedTime(dateInput, userTimeZone);

	return format(zonedDate, 'd MMM yyyy, h:mmaaa');
}
