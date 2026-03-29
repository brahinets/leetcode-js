export { canBeEqual }

function canBeEqual(s1: string, s2: string): boolean {
    return sortedAt(s1, [0, 2]) === sortedAt(s2, [0, 2])
        && sortedAt(s1, [1, 3]) === sortedAt(s2, [1, 3])
}

function sortedAt(s: string, indices: number[]): string {
    return indices.map((i: number): string => s[i]).sort().join('')
}
