export {clearStars}

function clearStars(s: string): string {
    let result: string[] = []

    for (let char of s) {
        if (char === "*") {
            result.pop()
        } else {
            result.push(char)
        }
    }

    return result.join("")
}
