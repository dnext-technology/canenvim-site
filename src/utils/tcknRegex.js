/* eslint-disable eqeqeq */
// eslint-disable-next-line indent

export const regexTcNumber = (value) => {
  value = value.toString();
  const isEleven = /^[0-9]{11}$/.test(value);
  let totalX = 0;
  for (let i = 0; i < 10; i += 1) {
    totalX += Number(value.substr(i, 1));
  }
  const isRuleX = totalX % 10 == value.substr(10, 1);
  let totalY1 = 0;
  let totalY2 = 0;
  for (let i = 0; i < 10; i += 2) {
    totalY1 += Number(value.substr(i, 1));
  }
  for (let i = 1; i < 10; i += 2) {
    totalY2 += Number(value.substr(i, 1));
  }
  const isRuleY = (totalY1 * 7 - totalY2) % 10 == value.substr(9, 0);
  return isEleven && isRuleX && isRuleY;
};
