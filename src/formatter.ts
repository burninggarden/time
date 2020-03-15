import {Inflector} from '@burninggarden/grammar';
import {TimeInterval} from '@burninggarden/enums';

class TimeFormatter {
	private milliseconds: number;
	private short: boolean;

	public constructor(milliseconds: number) {
		this.milliseconds = milliseconds;
		this.short = false;
	}

	public formatRelativeDuration(short: boolean = false): string {
		this.milliseconds = Date.now() - this.milliseconds;

		return this.formatDuration(short);
	}

	public formatDuration(short: boolean = false): string {
		this.short = short;

		if (this.milliseconds < TimeInterval.ONE_SECOND) {
			return this.formatMilliseconds();
		}

		if (this.milliseconds < TimeInterval.ONE_MINUTE) {
			return this.formatSeconds();
		}

		if (this.milliseconds < TimeInterval.ONE_HOUR) {
			return this.formatMinutes();
		}

		if (this.milliseconds < TimeInterval.ONE_DAY) {
			return this.formatHours();
		}

		if (this.milliseconds < TimeInterval.ONE_WEEK) {
			return this.formatDays();
		}

		if (this.milliseconds < TimeInterval.ONE_MONTH) {
			return this.formatWeeks();
		}

		if (this.milliseconds < TimeInterval.ONE_YEAR) {
			return this.formatMonths();
		}

		return this.formatYears();
	}

	private formatMilliseconds(): string {
		if (this.short) {
			return `${this.milliseconds} ms`;
		}

		return Inflector.singularizeOrPluralize(this.milliseconds, 'millisecond');
	}

	private formatSeconds(): string {
		const seconds = Math.floor(this.milliseconds/ TimeInterval.ONE_SECOND);

		if (this.short) {
			return `${seconds} s`;
		}

		return Inflector.singularizeOrPluralize(seconds, 'second');
	}

	private formatMinutes(): string {
		const minutes = Math.floor(this.milliseconds/ TimeInterval.ONE_MINUTE);

		if (this.short) {
			return `${minutes} m`;
		}

		return Inflector.singularizeOrPluralize(minutes, 'minute');
	}

	private formatHours(): string {
		const hours = Math.floor(this.milliseconds/ TimeInterval.ONE_HOUR);

		if (this.short) {
			return `${hours} h`;
		}

		return Inflector.singularizeOrPluralize(hours, 'hour');
	}

	private formatDays(): string {
		const days = Math.floor(this.milliseconds/ TimeInterval.ONE_DAY);

		if (this.short) {
			return `${days} d`;
		}

		return Inflector.singularizeOrPluralize(days, 'day');
	}

	private formatWeeks(): string {
		const weeks = Math.floor(this.milliseconds/ TimeInterval.ONE_WEEK);

		if (this.short) {
			return `${weeks} w`;
		}

		return Inflector.singularizeOrPluralize(weeks, 'week');
	}

	private formatMonths(): string {
		const months = Math.floor(this.milliseconds/ TimeInterval.ONE_MONTH);

		if (this.short) {
			return `${months} mo`;
		}

		return Inflector.singularizeOrPluralize(months, 'month');
	}

	private formatYears(): string {
		let years = this.milliseconds/ TimeInterval.ONE_YEAR;

		const yearsRounded = Math.round(years);

		if (Math.abs(years - yearsRounded) < (1 / 24)) {
			years = yearsRounded;
		} else {
			years = parseFloat(years.toFixed(1));
		}

		if (this.short) {
			return `${years} y`;
		}

		return Inflector.singularizeOrPluralize(years, 'year');
	}
}

export default TimeFormatter;
