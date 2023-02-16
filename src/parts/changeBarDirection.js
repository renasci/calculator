export function changeBarDirection() {
  const bars = document.querySelectorAll(`.bar__volume`);
  bars.forEach((bar) => {
    let width = bar.offsetWidth + `px`;
    bar.style.width = bar.offsetHeight + `px`;
    bar.style.height = width;
  });
}