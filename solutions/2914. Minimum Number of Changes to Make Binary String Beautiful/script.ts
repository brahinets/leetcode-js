export {minChanges}

function minChanges(s: string): number {
    let minChangesRequired: number = 0

    for (let i: number = 0; i < s.length; i += 2) {
        if (s.charAt(i) != s.charAt(i + 1)) {
            minChangesRequired++
        }
    }

    return minChangesRequired
}
