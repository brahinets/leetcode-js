export {maximumEnergy}

function maximumEnergy(energy: number[], k: number): number {
    let max: number = -Number.MAX_SAFE_INTEGER

    for (let i: number = energy.length - k; i < energy.length; i++) {
        let sum: number = 0

        for (let j: number = i; j >= 0; j -= k) {
            sum += energy[j]
            max = Math.max(max, sum)
        }
    }

    return max
}
