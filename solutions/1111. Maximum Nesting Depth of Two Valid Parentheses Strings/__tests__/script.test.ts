import { maxDepthAfterSplit } from '../script'

describe('1111. Maximum Nesting Depth of Two Valid Parentheses Strings', (): void => {
    it('sibling groups nested inside a shared pair', (): void => {
        const sequence: string = '(()())'

        const assignments: number[] = maxDepthAfterSplit(sequence)

        assertOptimalSplit(sequence, assignments)
    })

    it('mixture of flat and nested groups', (): void => {
        const sequence: string = '()(())()'

        const assignments: number[] = maxDepthAfterSplit(sequence)

        assertOptimalSplit(sequence, assignments)
    })

    it('single pair with no nesting', (): void => {
        const sequence: string = '()'

        const assignments: number[] = maxDepthAfterSplit(sequence)

        assertOptimalSplit(sequence, assignments)
    })

    it('several disjoint pairs with no nesting at all', (): void => {
        const sequence: string = '()()()'

        const assignments: number[] = maxDepthAfterSplit(sequence)

        assertOptimalSplit(sequence, assignments)
    })

    it('deeply nested chain of pairs', (): void => {
        const sequence: string = '((((()))))'

        const assignments: number[] = maxDepthAfterSplit(sequence)

        assertOptimalSplit(sequence, assignments)
    })

    it('nested groups combined with trailing flat groups', (): void => {
        const sequence: string = '(()(()))()(())'

        const assignments: number[] = maxDepthAfterSplit(sequence)

        assertOptimalSplit(sequence, assignments)
    })

    it('long sequence built from many repeated nested pairs', (): void => {
        const sequence: string = '(()())'.repeat(2000)

        const assignments: number[] = maxDepthAfterSplit(sequence)

        assertOptimalSplit(sequence, assignments)
    })
})

function assertOptimalSplit(sequence: string, assignments: number[]): void {
    const firstGroup: string = extractGroup(sequence, assignments, 0)
    const secondGroup: string = extractGroup(sequence, assignments, 1)

    expect(assignments.length)
        .toBe(sequence.length)

    expect(firstGroup.length + secondGroup.length)
        .toBe(sequence.length)

    expect(isValidParenthesesString(firstGroup))
        .toBe(true)

    expect(isValidParenthesesString(secondGroup))
        .toBe(true)

    const combinedDepth: number = Math.max(computeMaximumDepth(firstGroup), computeMaximumDepth(secondGroup))
    const expectedDepth: number = Math.ceil(computeMaximumDepth(sequence) / 2)

    expect(combinedDepth)
        .toBe(expectedDepth)
}

function extractGroup(sequence: string, assignments: number[], groupIdentifier: number): string {
    let group: string = ''

    for (let index: number = 0; index < sequence.length; index++) {
        if (assignments[index] === groupIdentifier) {
            group += sequence[index]
        }
    }

    return group
}

function isValidParenthesesString(value: string): boolean {
    let balance: number = 0

    for (const character of value) {
        balance += character === '(' ? 1 : -1

        if (balance < 0) {
            return false
        }
    }

    return balance === 0
}

function computeMaximumDepth(value: string): number {
    let balance: number = 0
    let maximumDepth: number = 0

    for (const character of value) {
        balance += character === '(' ? 1 : -1
        maximumDepth = Math.max(maximumDepth, balance)
    }

    return maximumDepth
}
