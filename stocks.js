const maxProfit = function maxNonContiguousIncreaseAlongArray(arr) {
  if (arr.length < 2) { return -1; }

  const head = arr[0];
  const tail = arr.slice(1);
  const maxHeadProfit = Math.max(...tail) - head;

  const result = Math.max(0, maxHeadProfit, maxProfit(tail));
  return (result === 0 ? -1 : result);
};

module.exports = {
  maxProfit: maxProfit
};
