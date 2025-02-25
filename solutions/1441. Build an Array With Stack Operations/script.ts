export {buildArray}

function buildArray(target: number[], n: number): string[] {
    const result: string[] = []
    let targetIndex: number = 0

    for (let i: number = 1; i <= n; i++) {
        if (targetIndex === target.length) {
            break
        }

        if (target[targetIndex] === i) {
            result.push("Push")
            targetIndex++
        } else {
            result.push("Push")
            result.push("Pop")
        }
    }

    return result
}
