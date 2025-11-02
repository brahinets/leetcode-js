export {grayCode}

function grayCode(n: number): number[] {
    const result: number[] = []

    const numberOfCodes: number = 2 ** n
    for (let i: number = 0; i < numberOfCodes; i++) {
        result.push(i ^ (i >> 1))
    }

    return result
}
