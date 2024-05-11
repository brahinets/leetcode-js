export {mincostToHireWorkers}

function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {
    const workers: Worker[] = collectWorkers(quality, wage, k)

    const pool: number[] = []
    let sum: number = 0
    let result: number = Number.MAX_SAFE_INTEGER

    for (const worker of workers) {
        pool.push(worker.quality)
        sum += worker.quality

        if (pool.length > k) {
            pool.sort((a: number, b: number): number => b - a)
            sum -= pool.shift()!
        }

        if (pool.length === k) {
            result = Math.min(result, sum * worker.ratio)
        }
    }

    return result
}

function collectWorkers(quality: number[], wage: number[], k: number): Worker[] {
    let workers: Worker[] = []

    for (let i: number = 0; i < wage.length; i++) {
        workers.push(new Worker(quality[i], wage[i]))
    }

    return workers.sort((a: Worker, b: Worker): number => a.ratio - b.ratio)
}

class Worker {
    quality: number
    wage: number
    ratio: number

    constructor(quality: number, wage: number) {
        this.quality = quality
        this.wage = wage
        this.ratio = wage / quality
    }
}
