import gcd from 'greatest-common-divisor'
export default function (...args) {
  if (!args.length) {
    throw new TypeError('lcm: At least one parameter is required')
  }
  return args.reduce((a, b) => Math.abs(a * b) / gcd(a, b))
}
