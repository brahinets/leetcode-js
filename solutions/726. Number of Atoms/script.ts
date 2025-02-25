export {countOfAtoms}

function countOfAtoms(formula: string): string {
    const atomCounts: Map<string, number>[] = [new Map<string, number>()]
    let currentIndex: number = 0

    while (currentIndex < formula.length) {
        if (formula[currentIndex] === '(') {
            atomCounts.push(new Map<string, number>())
            currentIndex++
        } else if (formula[currentIndex] === ')') {
            const nestedAtomCounts: Map<string, number> = atomCounts.pop()!
            currentIndex++
            const [multiplier, newIndex]: [number, number] = parseCount(formula, currentIndex)
            currentIndex = newIndex
            const currentAtomCounts: Map<string, number> = atomCounts[atomCounts.length - 1]
            for (const [atom, count] of nestedAtomCounts) {
                currentAtomCounts.set(atom, (currentAtomCounts.get(atom) || 0) + count * multiplier)
            }
        } else {
            const [atom, nameEndIndex]: [string, number] = parseAtomName(formula, currentIndex)
            currentIndex = nameEndIndex
            const [count, countEndIndex]: [number, number] = parseCount(formula, currentIndex)
            currentIndex = countEndIndex
            const currentAtomCounts: Map<string, number> = atomCounts[atomCounts.length - 1]
            currentAtomCounts.set(atom, (currentAtomCounts.get(atom) || 0) + count)
        }
    }

    return Array.from(atomCounts[0])
        .sort(([a,]: [string, number], [b,]: [string, number]): number => a.localeCompare(b))
        .map(([atom, count]: [string, number]): string => atom + (count > 1 ? count : ''))
        .join('')
}

function parseCount(formula: string, startIndex: number): [number, number] {
    let count: number = 0
    let currentIndex: number = startIndex
    while (currentIndex < formula.length && formula[currentIndex] >= '0' && formula[currentIndex] <= '9') {
        count = count * 10 + Number(formula[currentIndex])
        currentIndex++
    }
    return [count || 1, currentIndex]
}

function parseAtomName(formula: string, startIndex: number): [string, number] {
    let name: string = formula[startIndex]
    let currentIndex: number = startIndex + 1

    while (currentIndex < formula.length && formula[currentIndex] >= 'a' && formula[currentIndex] <= 'z') {
        name += formula[currentIndex]
        currentIndex++
    }

    return [name, currentIndex]
}
