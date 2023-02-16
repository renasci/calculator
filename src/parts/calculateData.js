import { rates } from "./rates.js";
import { getProviderCost } from "./getProviderCost.js";
import { applyLimits } from "./applyLimits.js";
import { addBarsVolume } from "./addBarsVolume.js";
import { addMinPriceTrigger } from "./addMinPriceTrigger.js";

export function calculateData(data) {
  const result = {};
  
  for (const provider in rates) {
    result[provider] = {};
    const extraType = provider in data ? data[provider] : null;
    const storageCost = getProviderCost(data.storageVolume, provider, `storageRates`, extraType);
    const transferCost = getProviderCost(data.transferVolume, provider, `transferRates`, extraType);
    const totalCost = applyLimits(storageCost + transferCost, provider);
    result[provider].cost = totalCost;
  }

  addBarsVolume(result);
  addMinPriceTrigger(result);
  return result;
}