import { arrayOf } from '../../common/array-factories'

export { maximumJumps }

function maximumJumps(numbers: number[], target: number): number {
    const n: number = numbers.length
    const maximumJumpsTo: number[] = arrayOf(-1, n)
    maximumJumpsTo[0] = 0

    for (let destination: number = 1; destination < n; destination++) {
        for (let source: number = 0; source < destination; source++) {
            if (maximumJumpsTo[source] === -1) {
                continue
            }

            const difference: number = Math.abs(numbers[destination] - numbers[source])

            if (difference <= target) {
                maximumJumpsTo[destination] = Math.max(
                    maximumJumpsTo[destination],
                    maximumJumpsTo[source] + 1
                )
            }
        }
    }

    return maximumJumpsTo[n - 1]
}
