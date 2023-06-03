export {maxScore}

function maxScore(nums: number[]): number {
    nums = nums.sort((a: number, b: number): number => b - a)

    let sum: number = 0;

    for (let i: number = nums.length / 2; i > 0; i--) {
        const pair: number[] = getPairWithBiggestGcd(nums);
        const first: number = pair[0];
        const second: number = pair[1];
        const gcd: number = pair[2];

        sum += (i * gcd);

        const higher: number = Math.max(first, second);
        const lower: number = Math.min(first, second);
        nums.splice(higher, 1)
        nums.splice(lower, 1)
    }

    return sum;
}

function gcd(a: number, b: number): number {
    if (b === 0) {
        return a;
    }

    return gcd(b, a % b);
}

function getPairWithBiggestGcd(nums: number[]): number[] {
    let first: number | undefined = undefined;
    let second: number | undefined = undefined;
    let maxGcd: number = -1;

    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = i + 1; j < nums.length; j++) {
            const gcdOf: number = gcd(nums[i], nums[j]);

            if (gcdOf > maxGcd) {
                maxGcd = gcdOf;
                first = i;
                second = j;
            }
        }
    }

    if (first === undefined || second === undefined || maxGcd === -1) {
        throw new Error("GCD not found");
    }

    return [first, second, maxGcd];
}