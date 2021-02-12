import { now } from './currentTime'
import getDate from './getDate'
import getFullYear from './getFullYear'
import getMonth from './getMonth'
import withZero from './helpers/withZero'

/**
 * @category Formatter
 * @param payload 
 */
export default function ddmmyyyy(
  payload:Date|number|string = now()
) {
  const yyyy = getFullYear(payload)
  // getMonth() is zero-based
  const mm = withZero(getMonth(payload) + 1)
  const dd = withZero(getDate(payload))

  return `${dd}.${mm}.${yyyy}`
}
