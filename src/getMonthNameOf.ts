import { MONTHS_OF } from './locale/ru/MONTHS'
import getMonth from './getMonth'
import { now } from './currentTime'

/**
 * @category Localizer
 * 
 * @param payload 
 */
export default function getMonthNameOf(
  payload:Date|number|string = now()
) {
  const date = getMonth(payload)

  return MONTHS_OF[date]
}
