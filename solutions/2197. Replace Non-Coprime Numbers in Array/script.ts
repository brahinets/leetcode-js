export {replaceNonCoprimes}

function replaceNonCoprimes(nums: number[]): number[] {
    const stack: number[] = []

    for (const num of nums) {
        let current: number = num

        while (stack.length > 0) {
            const top: number = stack[stack.length - 1]
            const g: number = gcd(top, current)

            if (g === 1) {
                break
            }

            current = lcm(top, current)
            stack.pop()
        }

        stack.push(current)
    }

    return stack
}

function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b)
}

function lcm(a: number, b: number): number {
    return a * b / gcd(a, b)
}
