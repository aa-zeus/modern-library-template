import { len } from './utils'

export const add = (a: number, b: number) => a + b

export const sub = (a: number, b: number) => a - b

export const mul = (a: number, b: number) => a * b

export const div = (a: number, b: number) => a / b

export const sum = (ar: number[]) => ar.reduce(add, 0)

export const mean = (ar: number[]) => sum(ar) / len(ar)

export const clone = (ar: object) => ({ ...ar })
