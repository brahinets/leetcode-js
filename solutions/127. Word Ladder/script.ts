export {ladderLength}

function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    if (!wordList.includes(endWord)) {
        return 0
    }

    const wordSet: Set<string> = new Set<string>(wordList)

    const queue: [string, number][] = [[beginWord, 1]]
    const visited: Set<string> = new Set<string>([beginWord])

    while (queue.length > 0) {
        const [currentWord, level]: [string, number] = queue.shift()!

        if (currentWord === endWord) {
            return level
        }

        for (let i:number = 0; i < currentWord.length; i++) {
            for (let charCode:number = 97; charCode <= 122; charCode++) {
                const letter: string = String.fromCharCode(charCode)

                if (letter === currentWord[i]) {
                    continue
                }

                const nextWord: string = currentWord.slice(0, i) + letter + currentWord.slice(i + 1)

                if (wordSet.has(nextWord) && !visited.has(nextWord)) {
                    visited.add(nextWord)
                    
                    queue.push([nextWord, level + 1])
                }
            }
        }
    }

    return 0
}