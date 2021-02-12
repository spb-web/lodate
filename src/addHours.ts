import { now } from './currentTime'

/**
 * @param addedHours 
 * @param payload 
 * 
 * @category Add
 * 
 * @example
 * ```typescript
 * import addHours from 'lodate/addHours';
 * 
 * const threeHoursLater = addHours(3);
 * const twoHoursEarlier = addHours(-2);
 * const now = addHours(2, twoHoursEarlier);
 * ```
 */
export default function addHours(
  addedHours:number,
  payload:Date|number|string = now()
) {
  const date = new Date(payload)
  date.setHours(date.getHours() + addedHours)

  return date
}
