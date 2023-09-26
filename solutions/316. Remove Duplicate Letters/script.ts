export {removeDuplicateLetters}

function removeDuplicateLetters(s: string): string {
    return [...new Set<string>(s.split(""))].sort().join("")
}
