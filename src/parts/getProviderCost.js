import { rates } from "./rates.js";

export function getProviderCost(volume, provider, type, extra) {
  const rate = rates[provider][type][extra ? extra : `default`];
  const price = rate.price;
  const freeLimit = rate.freeLimit;

  if(freeLimit >= volume) {
    return 0;
  } else {
    return Math.round(((volume - freeLimit) * price) * 1000) / 1000;
  }
}