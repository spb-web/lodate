import { now } from './currentTime'

/**
 * Gets the day-of-the-month.
 *
 * @param payload 
 * 
 * @returns {string} day-of-the-month
 */
export default function getDate(
  payload:Date|number|string = now(),
) {
  const date = new Date(payload)

  return date.getDate()
}
