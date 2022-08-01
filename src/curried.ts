import * as _ from './index.js'

export { sum, mean } from './index.js'

export const add = (b: number) => (a: number) => _.add(a, b)

export const sub = (b: number) => (a: number) => _.sub(a, b)

export const mul = (b: number) => (a: number) => _.mul(a, b)

export const div = (b: number) => (a: number) => _.div(a, b)
