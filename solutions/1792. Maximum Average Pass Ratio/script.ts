export {maxAverageRatio}

function maxAverageRatio(classes: number[][], extraStudents: number): number {
    let passRatios: number[] = calculatePassRatios(classes)

    while (extraStudents > 0) {
        let updatedRatios: number[] = calculateUpdatedRatios(classes)
        let bestClassIndex: number = findBestClassIndex(passRatios, updatedRatios)

        passRatios[bestClassIndex] = updatedRatios[bestClassIndex]
        classes[bestClassIndex][0]++
        classes[bestClassIndex][1]++

        extraStudents--
    }

    return passRatios.reduce((sum: number, ratio: number): number => sum + ratio, 0) / classes.length
}

function calculatePassRatios(classes: number[][]): number[] {
    return classes.map((cls: number[]): number => cls[0] / cls[1])
}

function calculateUpdatedRatios(classes: number[][]): number[] {
    return classes.map((cls: number[]): number => (cls[0] + 1) / (cls[1] + 1))
}

function findBestClassIndex(passRatios: number[], updatedRatios: number[]): number {
    let bestClassIndex: number = 0
    let maximumGain: number = 0

    for (let i: number = 0; i < updatedRatios.length; i++) {
        const gain: number = updatedRatios[i] - passRatios[i]

        if (gain > maximumGain) {
            bestClassIndex = i
            maximumGain = gain
        }
    }

    return bestClassIndex
}
