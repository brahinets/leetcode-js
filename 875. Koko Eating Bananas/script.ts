export {minEatingSpeed}

function minEatingSpeed(piles: number[], h: number): number {
    let left: number = 1;
    let right: number = piles
        .reduce((prev: number, curr: number): number => prev > curr ? prev : curr, piles[0]);

    while (left < right) {
        const mid: number = Math.floor((left + right) / 2);

        const time: number = piles
            .map((pile: number) => Math.ceil(pile / mid))
            .reduce((s: number, e: number) => s + e, 0);

        if (time <= h) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}