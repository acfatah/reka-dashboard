/**
 * Autoload any helper functions in this directory
 *
 * Any exported function within this directory will be available either in
 * Vue script or template tags including their types.
 *
 * See: https://github.com/unplugin/unplugin-auto-import
 */

export { cn } from '@/lib/utils'

// https://react-spectrum.adobe.com/internationalized/date/index.html
export { CalendarDate, type DateValue } from '@internationalized/date'

// https://vueuse.org/integrations/useNProgress
export { useNProgress } from '@vueuse/integrations/useNProgress'

// https://reka-ui.com/docs/guides/dates
export {
  createDateRange,
  createDecade,
  createMonth,
  createYear,
  createYearRange,
  getDaysInMonth,
  hasTime,
  isAfter,
  isAfterOrSame,
  isBefore,
  isBeforeOrSame,
  isBetween,
  isBetweenInclusive,
  isCalendarDateTime,
  isZonedDateTime,
  parseStringToDateValue,
  toDate,
} from 'reka-ui/date'
