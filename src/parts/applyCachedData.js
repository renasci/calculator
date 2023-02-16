export function applyCachedData(data) {
  for (const key in data) {
    const element = document.querySelector(`input[name=${key}]`);

    if(element.type === `range`) {
      element.value = data[key];
      const prise = element.closest(`.selector-form`).querySelector(`.selector-form__price`);
      prise.innerHTML = data[key] + " GB";
    } else if(element.type === `radio`) {
      document.querySelector(`input[name=${key}][value=${data[key]}]`).checked = true;
    } else {
      throw new Error(`Unexpected element type`);
    }
  }
}

  