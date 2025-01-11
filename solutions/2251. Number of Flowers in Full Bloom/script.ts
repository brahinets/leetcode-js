export {fullBloomFlowers}

function fullBloomFlowers(flowers: number[][], people: number[]): number[] {
    const starts: number[] = []
    const ends: number[] = []
    for (const [start, end] of flowers) {
        starts.push(start)
        ends.push(end + 1)
    }
    starts.sort((a: number, b: number): number => a - b)
    ends.sort((a: number, b: number): number => a - b)

    const answer: number[] = []
    for (const person of people) {
        const i: number = binarySearch(starts, person)
        const j: number = binarySearch(ends, person)
        answer.push(i - j)
    }

    return answer
}

function binarySearch(arr: number[], target: number): number {
    let left: number = 0
    let right: number = arr.length

    while (left < right) {
        const mid: number = Math.floor((left + right) / 2)

        if (target < arr[mid]) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
}
