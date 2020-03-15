import {Inflector} from '@burninggarden/grammar';

class DateFormatter {
	private timestamp: number;
	private short: boolean;

	public constructor(date: Date | string) {
		if (date instanceof Date) {
			this.timestamp = date.getTime();
		} else {
			this.timestamp = (new Date(date)).getTime();
		}

		this.short = false;
	}

	public formatRelativeDuration(short: boolean = false): string {
		this.short = short;

		const elapsedTime = Date.now() - date;

		return this.formatDuration(elapsedTime, short);
	}

	public formatDuration(short: boolean = false): string {
		this.short = short;

		if (this.timestamp < TimeInterval.ONE_SECOND) {
			return this.formatMilliseconds(this.timestamp, short);
		}

		if (this.timestamp < TimeInterval.ONE_MINUTE) {
			return this.formatSeconds(this.timestamp, short);
		}

		if (this.timestamp < TimeInterval.ONE_HOUR) {
			return this.formatMinutes(this.timestamp, short);
		}

		if (this.timestamp < TimeInterval.ONE_DAY) {
			return this.formatHours(this.timestamp, short);
		}

		if (this.timestamp < TimeInterval.ONE_WEEK) {
			return this.formatDays(this.timestamp, short);
		}

		if (this.timestamp < TimeInterval.ONE_MONTH) {
			return this.formatWeeks(this.timestamp, short);
		}

		if (this.timestamp < TimeInterval.ONE_YEAR) {
			return this.formatMonths(this.timestamp, short);
		}

		return this.formatYears(this.timestamp, short);
	}

	private formatMilliseconds(short: boolean = false): string {
		if (short) {
			return this.timestamp+ ' ms';
		}

		return Inflector.singularizeOrPluralize(this.timestamp, 'millisecond');
	}

	private formatSeconds(short: boolean = false): string {
		const seconds = Math.floor(this.timestamp/ TimeInterval.ONE_SECOND);

		if (short) {
			return seconds + ' s';
		}

		return Inflector.singularizeOrPluralize(seconds, 'second');
	}

	private formatMinutes(short: boolean = false): string {
		const minutes = Math.floor(this.timestamp/ TimeInterval.ONE_MINUTE);

		if (short) {
			return minutes + ' m';
		}

		return Inflector.singularizeOrPluralize(minutes, 'minute');
	}

	private formatHours(short: boolean = false): string {
		const hours = Math.floor(this.timestamp/ TimeInterval.ONE_HOUR);

		if (short) {
			return hours + ' h';
		}

		return Inflector.singularizeOrPluralize(hours, 'hour');
	}

	private formatDays(short: boolean = false): string {
		const days = Math.floor(this.timestamp/ TimeInterval.ONE_DAY);

		if (short) {
			return days + ' d';
		}

		return Inflector.singularizeOrPluralize(days, 'day');
	}

	private formatWeeks(short: boolean = false): string {
		const weeks = Math.floor(this.timestamp/ TimeInterval.ONE_WEEK);

		if (short) {
			return weeks + ' w';
		}

		return Inflector.singularizeOrPluralize(weeks, 'week');
	}

	private formatMonths(short: boolean = false): string {
		const months = Math.floor(this.timestamp/ TimeInterval.ONE_MONTH);

		if (short) {
			return months + ' mo';
		}

		return Inflector.singularizeOrPluralize(months, 'month');
	}

	private formatYears(short: boolean = false): string {
		const
			years        = this.timestamp/ TimeInterval.ONE_YEAR,
			yearsRounded = Math.round(years);

		if (Math.abs(years - yearsRounded) < (1 / 24)) {
			years = yearsRounded;
		} else {
			years = years.toFixed(1);
		}

		if (short) {
			return years + ' y';
		}

		return Inflector.singularizeOrPluralize(years, 'year');
	}
}

export default TimeFormatter;
