import { rates } from "./rates.js";

export function applyLimits(value, provider) {
  const minLimit = rates[provider].orderLimits.min;
  const maxLimit = rates[provider].orderLimits.max;
  let result = value;

  if(maxLimit && value > maxLimit) {
    result = maxLimit;
  } else if(minLimit && value < minLimit) {
    result = minLimit;
  }

  return Math.round(result * 1000) / 1000;
}