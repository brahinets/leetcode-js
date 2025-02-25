export {minSteps}

function minSteps(n: number): number {
    let steps: number = 0

    for (let i: number = 2; i <= n; i++) {
        while (n % i === 0) {
            steps += i
            n /= i
        }
    }

    return steps
}
