import { media } from "./media.js";

export function renderData(data) {
  for (const provider in data) {
    const bar = document.querySelector(`[data-provider=${provider}].bar__volume`);
    const barValue = document.querySelector(`[data-provider=${provider}].bar__value`);

    if(media.matches) {
      bar.style.height = data[provider].barVolume + "px";
    } else {
      bar.style.width = data[provider].barVolume + "px";
    }
    
    bar.style.backgroundColor = data[provider].isMinPrice ? bar.dataset.color : `#808080`
    barValue.innerHTML = Math.round(data[provider].cost * 100) / 100 + "$";
  }
}