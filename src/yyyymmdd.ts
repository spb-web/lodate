import { now } from './currentTime'
import getFullYear from './getFullYear'
import getMonth from './getMonth'
import getDate from './getDate'
import withZero from './helpers/withZero'

export default function yyyymmdd(
  payload:Date|number|string = now()
) {
  const yyyy = getFullYear(payload)
  // getMonth() is zero-based
  const mm = withZero(getMonth(payload) + 1)
  const dd = withZero(getDate(payload))

  return `${yyyy}-${mm}-${dd}`
}
