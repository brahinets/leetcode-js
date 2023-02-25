function max(numbers) {
    if (numbers.length === 0) {
        throw new Error("Arrays is empty");
    }

    return numbers.reduce((prev, curr) => curr > prev ? curr : prev)
}

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let profits = [];

    for (let i = 0; i < prices.length - 1; i++) {
        const buyoutPrice = prices[i];
        const maxSellPrice = max(prices.slice(i + 1));
        const profit = maxSellPrice - buyoutPrice;

        if (profit > 0) {
            profits.push(profit);
        }
    }

    return profits.length > 0 ? max(profits) : 0;
};