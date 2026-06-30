import { arrayOf } from '../../common/array-factories'

export { minJumps }

function minJumps(numbers: number[]): number {
    const length: number = numbers.length

    if (length === 1) {
        return 0
    }

    const MAX_VALUE: number = 1_000_001
    const smallestPrimeFactor: number[] = buildSmallestPrimeFactor(MAX_VALUE)
    const primeToIndices: Map<number, number[]> = buildPrimeToIndices(numbers, smallestPrimeFactor)

    const distances: number[] = arrayOf(-1, length)
    distances[0] = 0
    let queue: number[] = [0]

    while (queue.length > 0) {
        const nextQueue: number[] = []

        for (const currentIndex of queue) {
            if (currentIndex === length - 1) {
                return distances[currentIndex]
            }

            const nextDistance: number = distances[currentIndex] + 1

            for (const neighbor of [currentIndex - 1, currentIndex + 1]) {
                if (neighbor >= 0 && neighbor < length && distances[neighbor] === -1) {
                    distances[neighbor] = nextDistance
                    nextQueue.push(neighbor)
                }
            }

            const value: number = numbers[currentIndex]

            if (smallestPrimeFactor[value] === value) {
                const targets: number[] | undefined = primeToIndices.get(value)

                if (targets !== undefined) {
                    for (const target of targets) {
                        if (distances[target] === -1) {
                            distances[target] = nextDistance
                            nextQueue.push(target)
                        }
                    }

                    primeToIndices.delete(value)
                }
            }
        }

        queue = nextQueue
    }

    return distances[length - 1]
}

function buildSmallestPrimeFactor(maxValue: number): number[] {
    const smallestPrimeFactor: number[] = arrayOf(0, maxValue)

    for (let prime: number = 2; prime < maxValue; prime++) {
        if (smallestPrimeFactor[prime] === 0) {
            for (let multiple: number = prime; multiple < maxValue; multiple += prime) {
                if (smallestPrimeFactor[multiple] === 0) {
                    smallestPrimeFactor[multiple] = prime
                }
            }
        }
    }

    return smallestPrimeFactor
}

function buildPrimeToIndices(numbers: number[], smallestPrimeFactor: number[]): Map<number, number[]> {
    const primeToIndices: Map<number, number[]> = new Map<number, number[]>()

    for (let index: number = 0; index < numbers.length; index++) {
        const primeFactors: Set<number> = new Set<number>()
        let value: number = numbers[index]

        while (value > 1) {
            primeFactors.add(smallestPrimeFactor[value])
            value = Math.floor(value / smallestPrimeFactor[value])
        }

        for (const prime of primeFactors) {
            if (!primeToIndices.has(prime)) {
                primeToIndices.set(prime, [])
            }

            primeToIndices.get(prime)!.push(index)
        }
    }

    return primeToIndices
}
