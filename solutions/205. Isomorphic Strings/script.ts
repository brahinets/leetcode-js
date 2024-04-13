export {isIsomorphic}

function isIsomorphic(first: string, second: string): boolean {
    if (first.length !== second.length) {
        return false
    }

    const firstToSecond: Map<string, string> = new Map()
    const secondToFirst: Map<string, string> = new Map()

    for (let i: number = 0; i < first.length; i++) {
        const a: string = first[i]
        const b: string = second[i]

        if ((firstToSecond.has(a) && firstToSecond.get(a) !== b) ||
            (secondToFirst.has(b) && secondToFirst.get(b) !== a)) {
            return false
        }

        firstToSecond.set(a, b)
        secondToFirst.set(b, a)
    }

    return true
}
