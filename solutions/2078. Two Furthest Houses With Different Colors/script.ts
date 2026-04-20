export { maxDistance }

function maxDistance(colors: readonly number[]): number {
    const lastIndex: number = colors.length - 1
    let result: number = 0

    for (let i: number = lastIndex; i > 0; i--) {
        if (colors[i] !== colors[0]) {
            result = Math.max(result, i)
            break
        }
    }

    for (let i: number = 0; i < lastIndex; i++) {
        if (colors[i] !== colors[lastIndex]) {
            result = Math.max(result, lastIndex - i)
            break
        }
    }

    return result
}
