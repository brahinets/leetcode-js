export {numberOfAlternatingGroups}

function numberOfAlternatingGroups(colors: number[], k: number): number {
    const extendedColors: number[] = []
    for (let i: number = 0; i < colors.length; i++) {
        extendedColors[i] = colors[i]
    }
    for (let i: number = 0; i < k - 1; i++) {
        extendedColors[colors.length + i] = colors[i]
    }

    let length: number = extendedColors.length
    let result: number = 0
    let left: number = 0
    let right: number = 1

    while (right < length) {
        if (extendedColors[right] == extendedColors[right - 1]) {
            left = right
            right++
            continue
        }

        right++

        if (right - left < k) {
            continue
        }

        result++
        left++
    }

    return result
}
