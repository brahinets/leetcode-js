export {stringIndices}

interface TrieNode {
    readonly children: Map<string, TrieNode>
    bestIndex: number
    bestLength: number
}

function createTrieNode(bestIndex: number, bestLength: number): TrieNode {
    return {
        children: new Map<string, TrieNode>(),
        bestIndex: bestIndex,
        bestLength: bestLength,
    }
}

function isBetterCandidate(
    candidateLength: number,
    candidateIndex: number,
    currentLength: number,
    currentIndex: number,
): boolean {
    return candidateLength < currentLength
        || (candidateLength === currentLength && candidateIndex < currentIndex)
}

function stringIndices(wordsContainer: readonly string[], wordsQuery: readonly string[]): number[] {
    let globalBestIndex: number = 0
    let globalBestLength: number = wordsContainer[0].length
    const root: TrieNode = createTrieNode(0, wordsContainer[0].length)

    for (let wordIndex: number = 0; wordIndex < wordsContainer.length; wordIndex++) {
        const word: string = wordsContainer[wordIndex]
        const wordLength: number = word.length

        if (isBetterCandidate(wordLength, wordIndex, globalBestLength, globalBestIndex)) {
            globalBestIndex = wordIndex
            globalBestLength = wordLength
        }

        let current: TrieNode = root

        if (isBetterCandidate(wordLength, wordIndex, current.bestLength, current.bestIndex)) {
            current.bestIndex = wordIndex
            current.bestLength = wordLength
        }

        for (let characterPosition: number = wordLength - 1; characterPosition >= 0; characterPosition--) {
            const character: string = word[characterPosition]

            if (!current.children.has(character)) {
                current.children.set(character, createTrieNode(wordIndex, wordLength))
            }

            current = current.children.get(character)!

            if (isBetterCandidate(wordLength, wordIndex, current.bestLength, current.bestIndex)) {
                current.bestIndex = wordIndex
                current.bestLength = wordLength
            }
        }
    }

    const result: number[] = new Array<number>(wordsQuery.length)

    for (let queryIndex: number = 0; queryIndex < wordsQuery.length; queryIndex++) {
        const query: string = wordsQuery[queryIndex]
        let current: TrieNode = root

        for (let characterPosition: number = query.length - 1; characterPosition >= 0; characterPosition--) {
            const character: string = query[characterPosition]
            const child: TrieNode | undefined = current.children.get(character)

            if (child === undefined) {
                break
            }

            current = child
        }

        result[queryIndex] = current.bestIndex
    }

    return result
}
