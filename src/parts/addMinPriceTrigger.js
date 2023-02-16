export function addMinPriceTrigger(data) {
  const minPrice = Math.min(...Object.values(data).map(item => item.cost));

  for (const provider in data) {
    data[provider].isMinPrice = data[provider].cost === minPrice
  }
}