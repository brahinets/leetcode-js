export {lastStoneWeight}

function lastStoneWeight(stones: number[]): number {
    while (stones.length > 1) {
        stones = stones.sort((a: number, b: number) => a - b);

        const s1: number = stones.pop() || 0;
        const s2: number = stones.pop() || 0;

        if (s1 !== s2) {
            stones.push(s1 - s2);
        }
    }

    return stones[0] || 0;
}