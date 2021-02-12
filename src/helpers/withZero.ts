export default function withZero(num:number) {
  return num.toString().padStart(2, '0')
}
