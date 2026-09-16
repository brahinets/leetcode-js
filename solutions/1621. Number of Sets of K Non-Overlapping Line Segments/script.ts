import {matrixOfZeros} from '../../common/array-factories'

export {numberOfSets}

function numberOfSets(n: number, k: number): number {
    const MODULO: number = 1000000007
    const endsWithoutSegmentEndingHere: number[][] = matrixOfZeros(n, k + 1)
    const endsWithSegmentEndingHere: number[][] = matrixOfZeros(n, k + 1)

    for (let pointIndex: number = 0; pointIndex < n; pointIndex++) {
        endsWithoutSegmentEndingHere[pointIndex][0] = 1
    }

    for (let pointIndex: number = 1; pointIndex < n; pointIndex++) {
        for (let segmentCount: number = 1; segmentCount <= k; segmentCount++) {
            endsWithoutSegmentEndingHere[pointIndex][segmentCount] =
                (endsWithoutSegmentEndingHere[pointIndex - 1][segmentCount] + endsWithSegmentEndingHere[pointIndex - 1][segmentCount]) % MODULO

            endsWithSegmentEndingHere[pointIndex][segmentCount] =
                (endsWithSegmentEndingHere[pointIndex - 1][segmentCount] +
                    endsWithoutSegmentEndingHere[pointIndex - 1][segmentCount - 1] +
                    endsWithSegmentEndingHere[pointIndex - 1][segmentCount - 1]) % MODULO
        }
    }

    return (endsWithoutSegmentEndingHere[n - 1][k] + endsWithSegmentEndingHere[n - 1][k]) % MODULO
}
