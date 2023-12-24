import { numberFormatRegex } from './regex'

// format money with "," => ex: 100,000
export function formatNumberDot(num = 0) {
  if (num === undefined) return ''
  return `${num.toString().replace(numberFormatRegex, '$1,')}`
}

export function isEmptyObject(obj: Record<string, unknown>): boolean {
  return !Object.keys(obj).length;
}

export function filterUniqueElements<T>(array: T[]): T[] {
  return [...new Set(array)];
}

export function calculatePercentage(num1: number, num2: number) {
  return ( ((Number(num2) - Number(num1)) / Number(num2)) * 100).toFixed(2);
}