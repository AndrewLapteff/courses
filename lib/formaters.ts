const CURRENCY_FORMAT = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const NUMBER_FORMAT = new Intl.NumberFormat('en-US')

export const formatCurrency = (value: number): string => {
  return CURRENCY_FORMAT.format(value)
}

export const formatNumber = (value: number): string => {
  return NUMBER_FORMAT.format(value)
}

export const formatPercentage = (value: number): string => {
  return `${value.toFixed(2)}%`
}

export const formatDateTime = (value: string): string => {
  return new Date(value).toLocaleString()
}
