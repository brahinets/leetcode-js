export {sumZero}

function sumZero(count: number): number[] {
    const result: number[] = []

    for (let i: number = 1; i <= Math.floor(count / 2); i++) {
        result.push(i)
        result.push(-i)
    }

    if (count % 2 !== 0) {
        result.push(0)
    }

    return result
}

