export const differenceInSeconds = (now, future) => {
  return Math.floor((future - now) / 1000);
}

const padTwo = (num) => {
  const str = num.toString();
  return `${str.length === 1 ? '0' : ''}${num}`
}

export const secondsToDigitalTime = (sec) => {
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;
  return `${padTwo(Math.max(0, minutes))}:${padTwo(Math.max(0, seconds))}`;
}
