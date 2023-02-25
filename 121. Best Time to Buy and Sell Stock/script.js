function max(numbers, startFromInclusive) {
    if (numbers.length === 0) {
        throw new Error("Arrays is empty");
    }
    if (numbers.length < startFromInclusive) {
        throw new Error("Arrays is not long enough");
    }
    let max = numbers[startFromInclusive];
    for (let i = startFromInclusive + 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let maxProfit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        const buyoutPrice = prices[i];
        const maxSellPrice = max(prices, i + 1);
        const profit = maxSellPrice - buyoutPrice;

        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
};