export { canAliceWin }

function canAliceWin(n: number): boolean {
    let stonesRemaining: number = n
    let stonesToRemove: number = 10
    let isAliceTurn: boolean = true

    while (stonesToRemove >= 1 && stonesRemaining >= stonesToRemove) {
        stonesRemaining -= stonesToRemove
        stonesToRemove -= 1
        isAliceTurn = !isAliceTurn
    }

    return !isAliceTurn
}
