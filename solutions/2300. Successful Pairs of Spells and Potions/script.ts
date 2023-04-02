export {successfulPairs}

function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    potions = potions.sort((a: number, b: number) => a - b);

    const successfulPairsCounts: number[] = [];

    for (let spell of spells) {
        const minPotion: number = success / spell;
        const minPotionIndex: number = indexOfFirstBigger(potions, minPotion);

        successfulPairsCounts.push(potions.length - minPotionIndex);
    }

    return successfulPairsCounts;
}

function indexOfFirstBigger(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length;

    while (left < right) {
        const mid: number = Math.floor((left + right) / 2);

        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return right;
}