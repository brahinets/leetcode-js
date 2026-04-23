import { arrayOfZeros } from "../../common/array-factories"

export { distance }

function distance(numbers: number[]): number[] {
    const result: number[] = arrayOfZeros(numbers.length)
    const groups: Map<number, number[]> = new Map<number, number[]>()

    for (let index: number = 0; index < numbers.length; index++) {
        if (!groups.has(numbers[index])) {
            groups.set(numbers[index], [])
        }

        groups.get(numbers[index])!.push(index)
    }

    for (const [, indices] of groups) {
        const total: number = indices.length
        const totalSum: number = indices.reduce((sum: number, value: number): number => sum + value, 0)
        let leftSum: number = 0

        for (let position: number = 0; position < total; position++) {
            const currentIndex: number = indices[position]
            const leftCount: number = position
            const rightCount: number = total - 1 - position
            const rightSum: number = totalSum - leftSum - currentIndex

            result[currentIndex] = currentIndex * leftCount - leftSum + rightSum - currentIndex * rightCount
            leftSum += currentIndex
        }
    }

    return result
}
