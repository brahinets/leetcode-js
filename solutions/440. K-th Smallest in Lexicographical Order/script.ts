export {findKthNumber}

function findKthNumber(n: number, k: number): number {
    let current: number = 1

    k--
    while (k > 0) {
        const steps: number = calculateSteps(n, current, current + 1)
        if (steps <= k) {
            current++
            k -= steps
        } else {
            current *= 10
            k--
        }
    }

    return current
}

function calculateSteps(n: number, current: number, number: number): number {
    let steps: number = 0

    while (current <= n) {
        steps += Math.min(n + 1, number) - current
        current *= 10
        number *= 10
    }

    return steps
}

