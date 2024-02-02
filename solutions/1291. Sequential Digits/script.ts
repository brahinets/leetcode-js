export {sequentialDigits}

function sequentialDigits(low: number, high: number): number[] {
    const sequence: string = "123456789"

    let result: number[] = []
    for (let size: number = low.toString().length; size <= high.toString().length; size++) {
        for (let i:number = 0; i <= sequence.length - size; i++) {
            let value: number = Number(sequence.slice(i, i + size))

            if (value >= low && value <= high) {
                result.push(value)
            }
        }
    }

    return result.sort((a: number, b: number): number => a - b)
}
