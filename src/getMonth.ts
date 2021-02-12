import { now } from './currentTime'

export default function getMonth(
  payload:Date|number|string = now()
) {
  const date = new Date(payload)

  return date.getMonth()
}
