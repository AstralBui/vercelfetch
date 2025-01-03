declare module 'date-fns-tz' {
    export function utcToZonedTime(date: Date | number, timeZone: string): Date;
    export function zonedTimeToUtc(date: Date | string | number, timeZone: string): Date;
    export function format(
      date: Date | number,
      formatString: string,
      options?: { timeZone?: string }
    ): string;
  }
  