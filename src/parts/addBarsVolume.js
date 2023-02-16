export function addBarsVolume(data) {
  const maxVolume = 250;
  let ratio = 0;

  for (const provider in data) {
    if (data[provider].cost > maxVolume || true) {
      ratio = data[provider].cost / maxVolume > ratio ? data[provider].cost / maxVolume : ratio;
    }
  }

  for (const provider in data) {
    data[provider].barVolume = Math.round(data[provider].cost / ratio);
  }
}