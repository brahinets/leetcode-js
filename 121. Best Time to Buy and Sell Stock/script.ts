export const maxProfit = function (prices: number[]): number {
    let minPrice: number = prices[0];
    let maxProfit: number = 0;

    for (let i: number = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            const profit: number = prices[i] - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
};