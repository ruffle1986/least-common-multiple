import test from 'ava'
import lcm from './lib'

test('calculate the least common multiple', t => {
  t.is(lcm(12, 18), 36)
  t.is(lcm(36, 27, 45, 81), 1620)
  t.is(lcm(12), 12)
  t.end()
})

test('throw an error in case of zero arity', t => {
  try {
    lcm()
  } catch (err) {
    t.is((err instanceof TypeError), true)
    t.is(err.message, 'lcm: At least one parameter is required')
    t.end()
  }
})
