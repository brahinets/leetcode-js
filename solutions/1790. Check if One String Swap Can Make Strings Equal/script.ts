export {areAlmostEqual}

function areAlmostEqual(s1: string, s2: string): boolean {
    if (s1 === s2) {
        return true
    }

    const delta: number[] = []
    for (let i: number = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            delta.push(i)
        }
    }

    if (delta.length !== 2) {
        return false
    }

    return s1[delta[0]] === s2[delta[1]] && s1[delta[1]] === s2[delta[0]]
}
