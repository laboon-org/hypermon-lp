export const formatThreeDigits = (input, n = 0, x = 3) => {
    const temp = +input;
    const re = `\\d(?=(\\d{${x}})+${n > 0 ? '\\.' : '$'})`;
    return `${temp.toFixed(Math.max(0, n)).replace(new RegExp(re, 'g'), '$&.')}`;
  };
  