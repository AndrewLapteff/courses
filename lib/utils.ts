import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const transformObject = (inputObject: any) => {
  const stateSymbol = Object.getOwnPropertySymbols(inputObject)[0]
  const stateArray = inputObject[stateSymbol]

  const outputObject = {}

  stateArray.forEach((item: { name: string; value: any }) => {
    outputObject[item.name] = item.value
  })

  return outputObject
}
