import { MONTHS } from './locale/ru/MONTHS'
import getMonth from './getMonth'
import { now } from './currentTime'

export default function getMonthName(
  payload:Date|number|string = now()
) {
  const date = getMonth(payload)

  return MONTHS[date]
}
