export { minimumDistance }

const KEYBOARD_COLUMNS: number = 6
const UNPLACED: number = 26

function distance(first: number, second: number): number {
    if (first === UNPLACED || second === UNPLACED) {
        return 0
    }

    return Math.abs(Math.floor(first / KEYBOARD_COLUMNS) - Math.floor(second / KEYBOARD_COLUMNS))
        + Math.abs((first % KEYBOARD_COLUMNS) - (second % KEYBOARD_COLUMNS))
}

function minimumDistance(word: string): number {
    const INFINITY: number = Number.MAX_SAFE_INTEGER
    const STATE_COUNT: number = UNPLACED + 1

    let costByInactivePosition: number[] = new Array<number>(STATE_COUNT).fill(INFINITY)
    costByInactivePosition[UNPLACED] = 0

    for (let characterIndex: number = 0; characterIndex < word.length; characterIndex++) {
        const currentLetter: number = word.charCodeAt(characterIndex) - 65
        const previousLetter: number = characterIndex > 0 ? word.charCodeAt(characterIndex - 1) - 65 : UNPLACED

        const nextCostByInactivePosition: number[] = new Array<number>(STATE_COUNT).fill(INFINITY)

        for (let inactivePosition: number = 0; inactivePosition < STATE_COUNT; inactivePosition++) {
            const currentCost: number = costByInactivePosition[inactivePosition]

            if (currentCost === INFINITY) {
                continue
            }

            const movePreviousActiveToCurrentLetter: number = currentCost + distance(previousLetter, currentLetter)

            if (movePreviousActiveToCurrentLetter < nextCostByInactivePosition[inactivePosition]) {
                nextCostByInactivePosition[inactivePosition] = movePreviousActiveToCurrentLetter
            }

            const moveInactiveToCurrentLetter: number = currentCost + distance(inactivePosition, currentLetter)

            if (moveInactiveToCurrentLetter < nextCostByInactivePosition[previousLetter]) {
                nextCostByInactivePosition[previousLetter] = moveInactiveToCurrentLetter
            }
        }

        costByInactivePosition = nextCostByInactivePosition
    }

    return Math.min(...costByInactivePosition)
}
