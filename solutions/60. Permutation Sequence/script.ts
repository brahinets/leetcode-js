export {getPermutation}

function getPermutation(n: number, k: number): string {
    const numbers: number[] = []
    const factorials: number[] = [1]

    for (let i: number = 1; i <= n; i++) {
        numbers.push(i)
        factorials[i] = factorials[i - 1] * i
    }

    k--

    let result: string = ''
    for (let i: number = 1; i <= n; i++) {
        const index: number = Math.floor(k / factorials[n - i])
        result += numbers[index]
        numbers.splice(index, 1)
        k -= index * factorials[n - i]
    }

    return result
}
