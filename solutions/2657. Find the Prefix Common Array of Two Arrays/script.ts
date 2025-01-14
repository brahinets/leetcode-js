export {findThePrefixCommonArray}

function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    let prefixCommonArray: number[] = []

    for (let currentIndex: number = 0; currentIndex < A.length; currentIndex++) {
        let commonCount: number = 0

        for (let aIndex: number = 0; aIndex <= currentIndex; aIndex++) {
            for (let bIndex: number = 0; bIndex <= currentIndex; bIndex++) {
                if (A[aIndex] == B[bIndex]) {
                    commonCount++
                }
            }
        }

        prefixCommonArray[currentIndex] = commonCount
    }

    return prefixCommonArray
}
