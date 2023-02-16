export function throttleCalculation(func, ms, cb) {
  let savedArgs, isCooldown;
  return (...args) => {
    savedArgs = args;

    if(isCooldown) {
      return
    }
    
    isCooldown = true;

    setTimeout(() => {
      isCooldown = false;
      if(savedArgs) {
        cb(func(...savedArgs));
      }
    }, ms);
  }
}