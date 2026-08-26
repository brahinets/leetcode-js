import {arrayOfZeros} from '../../common/array-factories'

export {shortestBeautifulSubstring}

function shortestBeautifulSubstring(binaryString: string, onesCountTarget: number): string {
    const length: number = binaryString.length
    const prefixOnesCount: number[] = arrayOfZeros(length + 1)

    for (let index: number = 0; index < length; index++) {
        prefixOnesCount[index + 1] = prefixOnesCount[index] + (binaryString[index] === '1' ? 1 : 0)
    }

    let bestSubstring: string = ''
    let bestLength: number = Infinity

    for (let start: number = 0; start < length; start++) {
        for (let end: number = start + 1; end <= length; end++) {
            const onesCount: number = prefixOnesCount[end] - prefixOnesCount[start]

            if (onesCount > onesCountTarget) {
                break
            }

            if (onesCount === onesCountTarget) {
                const candidateLength: number = end - start
                const candidateSubstring: string = binaryString.slice(start, end)

                if (candidateLength < bestLength || (candidateLength === bestLength && candidateSubstring < bestSubstring)) {
                    bestLength = candidateLength
                    bestSubstring = candidateSubstring
                }

                break
            }
        }
    }

    return bestSubstring
}
