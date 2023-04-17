export {kidsWithCandies}

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const max: number = Math.max(...candies);

    return candies.map((c: number): boolean => c + extraCandies >= max);
}