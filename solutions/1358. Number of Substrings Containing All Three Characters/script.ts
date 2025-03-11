export {numberOfSubstrings}

function numberOfSubstrings(s: string): number {
    let result: number = 0
    let count: number[] = [0, 0, 0]
    let left: number = 0

    for (let right: number = 0; right < s.length; right++) {
        count[s.charCodeAt(right) - 97]++

        while (count[0] > 0 && count[1] > 0 && count[2] > 0) {
            result += s.length - right
            count[s.charCodeAt(left) - 97]--
            left++
        }
    }

    return result
}
