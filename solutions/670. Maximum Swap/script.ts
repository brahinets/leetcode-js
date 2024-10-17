export {maximumSwap}

function maximumSwap(num: number): number {
    const digits: string[] = num.toString().split('')
    const digitsSorted: string[] = num.toString().split('')
        .sort((a: string, b: string): number => Number(b) - Number(a))

    let i: number = 0
    while (i < digits.length) {
        if (digits[i] !== digitsSorted[i]) {
            let j: number = digits.length - 1

            while (j > i) {
                if (digits[j] === digitsSorted[i]) {
                    const temp: string = digits[i]
                    digits[i] = digits[j]
                    digits[j] = temp

                    return Number(digits.join(''))
                }

                j--
            }
        }

        i++
    }

    return num
}
