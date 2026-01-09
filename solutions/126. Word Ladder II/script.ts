export {findLadders}

function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
    const wordSet = new Set(wordList)
    
    if (!wordSet.has(endWord)) {
        return []
    }
    
    // BFS to find shortest distances and build parent relationships
    const parents = new Map<string, Set<string>>()
    const distance = new Map<string, number>()
    const queue: string[] = [beginWord]
    
    distance.set(beginWord, 0)
    parents.set(beginWord, new Set())
    
    let found = false
    
    while (queue.length > 0 && !found) {
        const levelSize = queue.length
        const visited = new Set<string>()
        
        for (let i = 0; i < levelSize; i++) {
            const word = queue.shift()!
            const currentDistance = distance.get(word)!
            
            // Try changing each character
            for (let j = 0; j < word.length; j++) {
                const chars = word.split('')
                
                for (let c = 97; c <= 122; c++) { // 'a' to 'z'
                    const char = String.fromCharCode(c)
                    
                    if (chars[j] === char) {
                        continue
                    }
                    
                    chars[j] = char
                    const nextWord = chars.join('')
                    
                    if (!wordSet.has(nextWord)) {
                        continue
                    }
                    
                    if (nextWord === endWord) {
                        found = true
                    }
                    
                    // If we haven't seen this word or we're seeing it at the same distance
                    if (!distance.has(nextWord)) {
                        distance.set(nextWord, currentDistance + 1)
                        visited.add(nextWord)
                        queue.push(nextWord)
                    }
                    
                    // Add parent relationship if this is a shortest path
                    if (distance.get(nextWord) === currentDistance + 1) {
                        if (!parents.has(nextWord)) {
                            parents.set(nextWord, new Set())
                        }
                        parents.get(nextWord)!.add(word)
                    }
                }
            }
        }
    }
    
    if (!distance.has(endWord)) {
        return []
    }
    
    // Backtrack to find all paths
    const result: string[][] = []
    const path: string[] = []
    
    function backtrack(word: string): void {
        path.push(word)
        
        if (word === beginWord) {
            result.push([...path].reverse())
        } else {
            const parentSet = parents.get(word)
            if (parentSet) {
                for (const parent of parentSet) {
                    backtrack(parent)
                }
            }
        }
        
        path.pop()
    }
    
    backtrack(endWord)
    
    return result
}
