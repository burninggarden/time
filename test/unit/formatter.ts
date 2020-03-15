import {TimeInterval} from '@burninggarden/enums';
import TimeFormatter from 'formatter';

describe('TimeFormatter', () => {
	describe('formatRelativeDuration()', () => {
		it('returns expected string', () => {
			const ms = Date.now() - (TimeInterval.ONE_MINUTE * 5);
			const formatter = new TimeFormatter(ms);
			const duration = formatter.formatRelativeDuration();

			expect(duration).toStrictEqual('5 minutes');
		});

		it('returns expected string in short format', () => {
			const ms = Date.now() - (TimeInterval.ONE_MINUTE * 5);
			const formatter = new TimeFormatter(ms);
			const duration = formatter.formatRelativeDuration(true);

			expect(duration).toStrictEqual('5 m');
		});
	});

	describe('formatDuration()', () => {
		describe('milliseconds', () => {
			it('returns expected string when delta is one millisecond', () => {
				const ms = 1;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration();

				expect(duration).toStrictEqual('1 millisecond');
			});

			it('returns expected string when delta is multiple milliseconds', () => {
				const ms = 50;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration();

				expect(duration).toStrictEqual('50 milliseconds');
			});

			it('returns expected string in short format', () => {
				const ms = 50;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration(true);

				expect(duration).toStrictEqual('50 ms');
			});
		});

		describe('seconds', () => {
			it('returns expected string when delta is one second', () => {
				const ms = TimeInterval.ONE_SECOND;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration();

				expect(duration).toStrictEqual('1 second');
			});

			it('returns expected string when delta is multiple seconds', () => {
				const ms = TimeInterval.ONE_SECOND * 50;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration();

				expect(duration).toStrictEqual('50 seconds');
			});

			it('returns expected string in short format', () => {
				const ms = TimeInterval.ONE_SECOND * 50;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration(true);

				expect(duration).toStrictEqual('50 s');
			});
		});

		describe('minutes', () => {
			it('returns expected string when delta is one minute', () => {
				const ms = TimeInterval.ONE_MINUTE;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration();

				expect(duration).toStrictEqual('1 minute');
			});

			it('returns expected string when delta is multiple minutes', () => {
				const ms = TimeInterval.ONE_MINUTE * 50;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration();

				expect(duration).toStrictEqual('50 minutes');
			});

			it('returns expected string in short format', () => {
				const ms = TimeInterval.ONE_MINUTE * 50;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration(true);

				expect(duration).toStrictEqual('50 m');
			});
		});

		describe('hours', () => {
			it('returns expected string when delta is one hour', () => {
				const ms = TimeInterval.ONE_HOUR;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration();

				expect(duration).toStrictEqual('1 hour');
			});

			it('returns expected string when delta is multiple hours', () => {
				const ms = TimeInterval.ONE_HOUR * 5;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration();

				expect(duration).toStrictEqual('5 hours');
			});

			it('returns expected string in short format', () => {
				const ms = TimeInterval.ONE_HOUR * 5;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration(true);

				expect(duration).toStrictEqual('5 h');
			});
		});

		describe('days', () => {
			it('returns expected string when delta is one day', () => {
				const ms = TimeInterval.ONE_DAY;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration();

				expect(duration).toStrictEqual('1 day');
			});

			it('returns expected string when delta is multiple days', () => {
				const ms = TimeInterval.ONE_DAY * 5;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration();

				expect(duration).toStrictEqual('5 days');
			});

			it('returns expected string in short format', () => {
				const ms = TimeInterval.ONE_DAY * 5;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration(true);

				expect(duration).toStrictEqual('5 d');
			});
		});

		describe('weeks', () => {
			it('returns expected string when delta is one week', () => {
				const ms = TimeInterval.ONE_WEEK;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration();

				expect(duration).toStrictEqual('1 week');
			});

			it('returns expected string when delta is multiple weeks', () => {
				const ms = TimeInterval.ONE_WEEK * 3;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration();

				expect(duration).toStrictEqual('3 weeks');
			});

			it('returns expected string in short format', () => {
				const ms = TimeInterval.ONE_WEEK * 3;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration(true);

				expect(duration).toStrictEqual('3 w');
			});
		});

		describe('months', () => {
			it('returns expected string when delta is one month', () => {
				const ms = TimeInterval.ONE_MONTH;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration();

				expect(duration).toStrictEqual('1 month');
			});

			it('returns expected string when delta is multiple months', () => {
				const ms = TimeInterval.ONE_MONTH * 3;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration();

				expect(duration).toStrictEqual('3 months');
			});

			it('returns expected string in short format', () => {
				const ms = TimeInterval.ONE_MONTH * 3;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration(true);

				expect(duration).toStrictEqual('3 mo');
			});
		});

		describe('years', () => {
			it('returns expected string when delta is one year', () => {
				const ms = TimeInterval.ONE_YEAR;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration();

				expect(duration).toStrictEqual('1 year');
			});

			it('returns expected string when delta is multiple years', () => {
				const ms = TimeInterval.ONE_YEAR * 3;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration();

				expect(duration).toStrictEqual('3 years');
			});

			it('returns expected string in short format', () => {
				const ms = TimeInterval.ONE_YEAR * 3;
				const formatter = new TimeFormatter(ms);
				const duration = formatter.formatDuration(true);

				expect(duration).toStrictEqual('3 y');
			});
		});
	});
});
