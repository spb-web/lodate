import { now } from './currentTime'

export default function getFullYear(
  payload:Date|number|string = now()
) {
  return (new Date(payload)).getFullYear()
}
