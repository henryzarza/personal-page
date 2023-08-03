//@ts-nocheck

/* Function from: https://dev.to/changoman/showhide-element-on-scroll-w-vanilla-js-3odm */
export function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export const buildThresholdList = (steps: number) => {
  const thresholds = [0];

  for (let i = 1; i <= steps; i++) {
    const ratio = i / steps;
    thresholds.push(ratio);
  }

  return thresholds;
};
