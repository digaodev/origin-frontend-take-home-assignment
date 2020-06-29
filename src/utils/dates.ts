import addMonths from 'date-fns/addMonths';
import subMonths from 'date-fns/subMonths';
import differenceInCalendarMonths from 'date-fns/differenceInCalendarMonths';
import format from 'date-fns/format';

const add1Month = (date: Date): Date => addMonths(date, 1);

const sub1Month = (date: Date): Date => subMonths(date, 1);

const monthsFromNow = (date: Date): number =>
  differenceInCalendarMonths(date, new Date());

const getMonth = (date: Date): string => format(date, 'MMMM');

const getYear = (date: Date): string => format(date, 'yyyy');

export { add1Month, sub1Month, monthsFromNow, getMonth, getYear };
