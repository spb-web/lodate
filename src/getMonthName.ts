import { MONTHS } from './locale/ru/MONTHS'
import getMonth from './getMonth'
import { now } from './currentTime'

/**
 * @category Localizer
 * 
 * @param payload 
 */
export default function getMonthName(
  payload:Date|number|string = now()
):string {
  const date = getMonth(payload)

  return MONTHS[date]
}
