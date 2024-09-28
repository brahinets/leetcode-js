export {groupAnagrams}

function groupAnagrams(strs: string[]): string[][] {
    const anagrams: Map<string, string[]> = new Map<string, string[]>()

    for (const str of strs) {
        const letters: string = str.split("").sort().join("")
        anagrams.set(letters, [...anagrams.get(letters) ?? [], str].sort())
    }

    return [...anagrams.values()]
        .sort((a: string[], b: string[]): number => a.length - b.length)
}
