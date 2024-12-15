import {PriorityQueue as CustomPriorityQueue} from "../../common/PriorityQueue"

export {maxAverageRatio}

function maxAverageRatio(classes: number[][], extraStudents: number): number {
    const comparator = (a: [number, number], b: [number, number]): number => {
        const [x, y]: [number, number] = a
        const [u, v]: [number, number] = b
        return (u + 1) / (v + 1) - u / v - (x + 1) / (y + 1) + x / y
    }

    const pq: CustomPriorityQueue<[number, number]> = new CustomPriorityQueue<[number, number]>(comparator)

    for (const [pass, total] of classes) {
        pq.enqueue([pass, total])
    }

    while (extraStudents > 0) {
        const [pass, total]: [number, number] = pq.dequeue() as [number, number]
        pq.enqueue([pass + 1, total + 1])
        extraStudents--
    }

    let sum: number = 0
    while (!pq.isEmpty()) {
        const [pass, total]: [number, number] = pq.dequeue() as [number, number]
        sum += pass / total
    }

    return sum / classes.length
}
