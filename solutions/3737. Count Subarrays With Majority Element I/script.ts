export { countMajoritySubarrays }

function countMajoritySubarrays(numbers: number[], target: number): number {
    let result: number = 0

    for (let start: number = 0; start < numbers.length; start++) {
        let targetCount: number = 0

        for (let end: number = start; end < numbers.length; end++) {
            if (numbers[end] === target) {
                targetCount++
            }

            const subarrayLength: number = end - start + 1

            if (targetCount * 2 > subarrayLength) {
                result++
            }
        }
    }

    return result
}
