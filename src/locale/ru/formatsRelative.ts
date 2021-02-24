import { FormatRelative } from '../types'
import pluralization from './pluralization'

const formatsEgo = {
  past: (value:number, unit:string) => `${value} ${unit} назад`,
  future: (value:number, unit:string) => `через ${value} ${unit}`,
}

const formatRelative:FormatRelative = (value, type) => {
  return formatsEgo[value < 0 ? 'past' : 'future'](
    value,
    pluralization(value, type),
  )
}

export default formatRelative
