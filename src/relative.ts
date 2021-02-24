import type { FormatRelative } from './locale/types'
import { now } from './currentTime'
import formatRelative from './locale/ru/formatsRelative'

/**
 * Localized relative date/time formatting (both for past and future dates).
 * 
 * @category Localizer
 * 
 * @example
 * ```typescript
 * import relative from 'lodate/relative'
 *
 * const createdAt = new Date(2021, 0, 1)
 * 
 * relative(createdAt) // 20 days ago
 * ```
 *
 * @param payload 
 * @return { string }
 */
export default function relative(
  payload:Date|number|string = now(),
  options: {
    formatter?: FormatRelative
  }
): string {
  const { formatter = formatRelative } = options
  const date = new Date(payload)
  const ms = date.getTime() - now()

  const data = [
    [1000, 60],
    [60000, 60],
    [3600000, 24],
    [86400000, 30],
    [2592000000, 12],
    [31104000000, Infinity],
  ]
  
  for (let index = 0; index < data.length; index++) {
    const [divider, maximumValue] = data[index]
    const value = Math.round(ms / divider)

    if (Math.abs(value) < maximumValue) {
      return formatter(value, index)
    }
  }

  throw new Error()
}
