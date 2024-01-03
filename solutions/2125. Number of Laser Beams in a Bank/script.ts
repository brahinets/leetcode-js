export {numberOfBeams}

function numberOfBeams(bank: string[]): number {
    let result: number = 0

    if (bank.length === 0) {
        return result
    }

    let prev: string = bank[0]
    for (let row: number = 1; row < bank.length; row++) {
        const prevDevices: number = (prev.match(/1/g) || []).length
        if (prevDevices === 0) {
            prev = bank[row]
            continue
        }

        const currentDevices: number = (bank[row].match(/1/g) || []).length
        if (currentDevices === 0) {
            continue
        }

        result += prevDevices * currentDevices
        prev = bank[row]
    }

    return result
}
