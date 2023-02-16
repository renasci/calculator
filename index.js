import { media } from "./src/parts/media.js";
import { calculateData } from "./src/parts/calculateData.js";
import { throttleCalculation } from "./src/parts/throttleCalculation.js";
import { applyCachedData } from "./src/parts/applyCachedData.js";
import { renderData } from "./src/parts/renderData.js";
import { getCachedValues } from "./src/parts/getCachedValues.js";
import { setCacheValues }from "./src/parts/setCacheValues.js";
import { changeBarDirection } from "./src/parts/changeBarDirection.js";

document.addEventListener(`DOMContentLoaded`, () => {
  const storageSelect = document.querySelector(`#conteiner`);
  const cachedValues = getCachedValues();
  const calculateDataThrottle = throttleCalculation(calculateData, 50, renderData);
  
  if(media.matches) {
    changeBarDirection();
  }
  
  media.addEventListener('change', () => {
    changeBarDirection();
  });
  
  if(cachedValues) {
    applyCachedData(cachedValues);
  } 

  const form = new FormData(document.forms[0]);
  calculateDataThrottle(Object.fromEntries(form));

  storageSelect.addEventListener(`input`, (event)=> {
    if(event.target.matches(`input[type="range"]`)) {
      const prise = event.target.closest(`.selector-form`).querySelector(`.selector-form__price`);
      prise.innerHTML = event.target.value + " GB";
    }

    const form = new FormData(document.forms[0]);
    const formData = Object.fromEntries(form)
    setCacheValues(formData)
    calculateDataThrottle(formData);
  });
});