export {minEnd}

function minEnd(n: number, x: number): number {
    let result: number = x

    while (--n > 0) {
        result = (result + 1) | x
    }

    return result
}
