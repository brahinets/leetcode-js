import { arrayOfZeros } from '../../common/array-factories'

export { climbStairs }

function climbStairs(n: number, costs: number[]): number {
    const minimumCosts: number[] = arrayOfZeros(n + 1)

    for (let step: number = 1; step <= n; step++) {
        minimumCosts[step] = Infinity

        for (let jump: number = 1; jump <= 3 && jump <= step; jump++) {
            const jumpCost: number =
                minimumCosts[step - jump] + costs[step - 1] + jump * jump

            minimumCosts[step] = Math.min(minimumCosts[step], jumpCost)
        }
    }

    return minimumCosts[n]
}
