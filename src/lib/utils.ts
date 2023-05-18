type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(
	date: string,
	dateStyle: DateStyle = 'medium',
	locales = 'en',
) {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
}

export function prettyDate(dt: string) {
	if (!dt) return '';
	if (dt) {
		const date = new Date(dt);
		// if Invalid Date, it's YYYYMMDD
		if (isNaN(date.getMonth())) {
			const year = date.toString().substring(0, 4);
			const month = date.toString().substring(4, 6);
			const day = date.toString().substring(6, 8);
			return timeSince(
				new Date(parseInt(year), parseInt(month) - 1, parseInt(day)),
			);
		} else {
			return timeSince(new Date(dt));
		}
	}
}

function timeSince(date: Date) {
	const now = new Date();
	const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
	let interval = Math.floor(seconds / 31536000);

	interval = Math.floor(seconds / 86400);
	// if interval is negative, it's a future dated post
	if (interval < 0) {
		return '0 secs ago';
	}

	if (interval >= 1) {
		if (interval <= 3) {
			if (interval === 1) {
				return interval + ' day ago';
			} else {
				return interval + ' days ago';
			}
		} else {
			return date.toDateString().slice(4, 15);
		}
	}
	interval = Math.floor(seconds / 3600);
	if (interval >= 1) {
		return interval + ' hours ago';
	}
	interval = Math.floor(seconds / 60);
	if (interval >= 1) {
		return interval + ' mins ago';
	}
	if (seconds) {
		return Math.floor(seconds) + ' secs ago';
	} else {
		return '0 secs ago';
	}
}
