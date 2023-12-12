export {groupAnagrams}

function groupAnagrams(strs: string[]): string[][] {
    const anagrams: Map<string, string[]> = new Map<string, string[]>()

    for (const str of strs) {
        const letters: string = str.split("").toSorted().join("")
        anagrams.set(letters, [...anagrams.get(letters) ?? [], str].toSorted())
    }

    return [...anagrams.values()]
        .toSorted((a: string[], b: string[]): number => a.length - b.length)
}
