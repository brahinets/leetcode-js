export {findLadders}

type ParentMap = Map<string, Set<string>>
type DistanceMap = Map<string, number>

function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
    const wordSet: Set<string> = new Set(wordList)
    
    if (!wordSet.has(endWord)) {
        return []
    }
    
    const parents: ParentMap = new Map()
    const distance: DistanceMap = buildDistanceGraph(beginWord, endWord, wordSet, parents)
    
    if (!distance.has(endWord)) {
        return []
    }
    
    return backtrackAllPaths(beginWord, endWord, parents)
}

function buildDistanceGraph(
    beginWord: string,
    endWord: string,
    wordSet: Set<string>,
    parents: ParentMap
): DistanceMap {
    const distance: DistanceMap = new Map()
    const queue: string[] = [beginWord]
    
    distance.set(beginWord, 0)
    parents.set(beginWord, new Set())
    
    let found: boolean = false
    
    while (queue.length > 0 && !found) {
        found = processLevel(queue, endWord, wordSet, distance, parents)
    }
    
    return distance
}

function processLevel(
    queue: string[],
    endWord: string,
    wordSet: Set<string>,
    distance: DistanceMap,
    parents: ParentMap
): boolean {
    const levelSize: number = queue.length
    const visited: Set<string> = new Set()
    let found: boolean = false
    
    for (let i: number = 0; i < levelSize; i++) {
        const word: string = queue.shift()!
        const currentDistance: number = distance.get(word)!
        
        const neighbors: string[] = getNeighbors(word, wordSet)
        
        for (const neighbor of neighbors) {
            if (neighbor === endWord) {
                found = true
            }
            
            if (shouldAddToQueue(neighbor, distance, visited)) {
                distance.set(neighbor, currentDistance + 1)
                visited.add(neighbor)
                queue.push(neighbor)
            }
            
            if (isShortestPath(neighbor, currentDistance, distance)) {
                addParentRelationship(neighbor, word, parents)
            }
        }
    }
    
    return found
}

function getNeighbors(word: string, wordSet: Set<string>): string[] {
    const neighbors: string[] = []
    const wordLength: number = word.length
    
    for (let i: number = 0; i < wordLength; i++) {
        const chars: string[] = word.split('')
        
        for (let charCode: number = 97; charCode <= 122; charCode++) {
            const newChar: string = String.fromCharCode(charCode)
            
            if (chars[i] === newChar) {
                continue
            }
            
            chars[i] = newChar
            const neighbor: string = chars.join('')
            
            if (wordSet.has(neighbor)) {
                neighbors.push(neighbor)
            }
        }
    }
    
    return neighbors
}

function shouldAddToQueue(word: string, distance: DistanceMap, visited: Set<string>): boolean {
    return !distance.has(word) && !visited.has(word)
}

function isShortestPath(word: string, currentDistance: number, distance: DistanceMap): boolean {
    return distance.get(word) === currentDistance + 1
}

function addParentRelationship(child: string, parent: string, parents: ParentMap): void {
    if (!parents.has(child)) {
        parents.set(child, new Set())
    }
    parents.get(child)!.add(parent)
}

function backtrackAllPaths(beginWord: string, endWord: string, parents: ParentMap): string[][] {
    const result: string[][] = []
    const currentPath: string[] = []
    
    function backtrack(word: string): void {
        currentPath.push(word)
        
        if (word === beginWord) {
            result.push([...currentPath].reverse())
        } else {
            const parentSet: Set<string> | undefined = parents.get(word)
            
            if (parentSet) {
                for (const parent of parentSet) {
                    backtrack(parent)
                }
            }
        }
        
        currentPath.pop()
    }
    
    backtrack(endWord)
    
    return result
}
