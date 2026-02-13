export {longestBalanced}

function longestBalanced(s: string): number {
    const singleCharacterLength: number = findLongestSingleCharacter(s)
    const twoCharacterLength: number = findLongestTwoCharacters(s)
    const threeCharacterLength: number = findLongestThreeCharacters(s)
    
    return Math.max(singleCharacterLength, twoCharacterLength, threeCharacterLength)
}

function findLongestSingleCharacter(s: string): number {
    const length: number = s.length
    let maxLength: number = 0
    
    let index: number = 0
    while (index < length) {
        let nextIndex: number = index
        while (nextIndex < length && s[nextIndex] === s[index]) {
            nextIndex++
        }
        maxLength = Math.max(maxLength, nextIndex - index)
        index = nextIndex
    }
    
    return maxLength
}

function findLongestTwoCharacters(s: string): number {
    const pairs: [string, string, string][] = [
        ['a', 'b', 'c'],
        ['a', 'c', 'b'],
        ['b', 'c', 'a']
    ]
    
    let maxLength: number = 0
    
    for (const [firstChar, secondChar, skipChar] of pairs) {
        const length: number = findLongestBalancedPair(s, firstChar, secondChar, skipChar)
        maxLength = Math.max(maxLength, length)
    }
    
    return maxLength
}

function findLongestBalancedPair(s: string, firstChar: string, secondChar: string, skipChar: string): number {
    const differenceToIndex: Map<number, number> = new Map<number, number>()
    differenceToIndex.set(0, -1)
    let difference: number = 0
    let maxLength: number = 0
    
    for (let index: number = 0; index < s.length; index++) {
        const character: string = s[index]
        
        if (character === skipChar) {
            differenceToIndex.clear()
            differenceToIndex.set(0, index)
            difference = 0
        } else if (character === firstChar) {
            difference++
        } else {
            difference--
        }
        
        if (differenceToIndex.has(difference)) {
            maxLength = Math.max(maxLength, index - differenceToIndex.get(difference)!)
        } else {
            differenceToIndex.set(difference, index)
        }
    }
    
    return maxLength
}

function findLongestThreeCharacters(s: string): number {
    const stateToIndex: Map<string, number> = new Map<string, number>()
    stateToIndex.set("0,0", -1)
    let countA: number = 0
    let countB: number = 0
    let countC: number = 0
    let maxLength: number = 0
    
    for (let index: number = 0; index < s.length; index++) {
        const character: string = s[index]
        
        if (character === 'a') {
            countA++
        } else if (character === 'b') {
            countB++
        } else {
            countC++
        }
        
        const state: string = `${countA - countB},${countB - countC}`
        
        if (stateToIndex.has(state)) {
            maxLength = Math.max(maxLength, index - stateToIndex.get(state)!)
        } else {
            stateToIndex.set(state, index)
        }
    }
    
    return maxLength
}