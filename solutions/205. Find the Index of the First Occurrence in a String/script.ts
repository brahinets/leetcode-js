export {isIsomorphic}

function isIsomorphic(first: string, second: string): boolean {
    if (first.length !== second.length) {
        return false
    }

    const length: number = first.length

    for (let i: number = 0; i < length; i++) {
        const aElement: string = first[i]
        const bElement: string = second[i]

        for (let j: number = i; j < length; j++) {
            const brokenForward: boolean = first[j] === aElement && second[j] !== bElement
            const brokenBackward: boolean = second[j] === bElement && first[j] !== aElement

            if (brokenForward || brokenBackward) {
                return false
            }
        }
    }

    return true
}
