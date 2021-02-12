import { now } from './currentTime'

export default function addHours(
  addedHours:number,
  payload:Date|number|string = now()
) {
  const date = new Date(payload)
  date.setHours(date.getHours() + addedHours)

  return date
}
