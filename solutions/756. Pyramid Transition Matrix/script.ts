export {pyramidTransition}

function pyramidTransition(bottom: string, allowed: string[]): boolean {
    const allowedMap: Map<string, Set<string>> = new Map<string, Set<string>>()

    for (const triple of allowed) {
        const key: string = triple.slice(0, 2)
        const value: string = triple[2]

        if (!allowedMap.has(key)) {
            allowedMap.set(key, new Set<string>())
        }
        allowedMap.get(key)!.add(value)
    }

    return canBuildPyramid(bottom, allowedMap)
}

function canBuildPyramid(currentLevel: string, allowedMap: Map<string, Set<string>>): boolean {
    if (currentLevel.length === 1) {
        return true
    }

    const nextLevelOptions: string[][] = []

    for (let i: number = 0; i < currentLevel.length - 1; i++) {
        const pair: string = currentLevel.slice(i, i + 2)

        if (!allowedMap.has(pair)) {
            return false
        }

        nextLevelOptions.push(Array.from(allowedMap.get(pair)!))
    }

    return backtrack(nextLevelOptions, 0, "", allowedMap)
}

function backtrack(
    nextLevelOptions: string[][],
    index: number,
    nextLevel: string,
    allowedMap: Map<string, Set<string>>
): boolean {
    if (index === nextLevelOptions.length) {
        return canBuildPyramid(nextLevel, allowedMap)
    }

    for (const option of nextLevelOptions[index]) {
        if (backtrack(nextLevelOptions, index + 1, nextLevel + option, allowedMap)) {
            return true
        }
    }

    return false
}
