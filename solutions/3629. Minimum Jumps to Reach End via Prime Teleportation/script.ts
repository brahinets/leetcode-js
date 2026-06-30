export { minJumps }

const MAX_VALUE: number = 1_000_001
const SMALLEST_PRIME_FACTOR: Int32Array = buildSmallestPrimeFactor()

function minJumps(numbers: number[]): number {
    const length: number = numbers.length

    if (length === 1) {
        return 0
    }

    const primeToIndices: Map<number, number[]> = buildPrimeToIndices(numbers)

    const distances: Int32Array = new Int32Array(length).fill(-1)
    distances[0] = 0

    const queue: number[] = [0]
    let front: number = 0

    while (front < queue.length) {
        const currentIndex: number = queue[front++]

        if (currentIndex === length - 1) {
            return distances[currentIndex]
        }

        const nextDistance: number = distances[currentIndex] + 1

        if (currentIndex > 0 && distances[currentIndex - 1] === -1) {
            distances[currentIndex - 1] = nextDistance
            queue.push(currentIndex - 1)
        }

        if (currentIndex + 1 < length && distances[currentIndex + 1] === -1) {
            distances[currentIndex + 1] = nextDistance

            if (currentIndex + 1 === length - 1) {
                return nextDistance
            }

            queue.push(currentIndex + 1)
        }

        const value: number = numbers[currentIndex]

        if (SMALLEST_PRIME_FACTOR[value] === value) {
            const targets: number[] | undefined = primeToIndices.get(value)

            if (targets !== undefined) {
                for (const target of targets) {
                    if (distances[target] === -1) {
                        distances[target] = nextDistance

                        if (target === length - 1) {
                            return nextDistance
                        }

                        queue.push(target)
                    }
                }

                primeToIndices.delete(value)
            }
        }
    }

    return distances[length - 1]
}

function buildPrimeToIndices(numbers: number[]): Map<number, number[]> {
    const primeToIndices: Map<number, number[]> = new Map<number, number[]>()

    for (let index: number = 0; index < numbers.length; index++) {
        let value: number = numbers[index]
        let lastPrime: number = 0

        while (value > 1) {
            const prime: number = SMALLEST_PRIME_FACTOR[value]

            if (prime !== lastPrime) {
                let bucket: number[] | undefined = primeToIndices.get(prime)

                if (bucket === undefined) {
                    bucket = []
                    primeToIndices.set(prime, bucket)
                }

                bucket.push(index)
                lastPrime = prime
            }

            value = value / prime | 0
        }
    }

    return primeToIndices
}

function buildSmallestPrimeFactor(): Int32Array {
    const smallestPrimeFactor: Int32Array = new Int32Array(MAX_VALUE)

    for (let prime: number = 2; prime < MAX_VALUE; prime++) {
        if (smallestPrimeFactor[prime] === 0) {
            for (let multiple: number = prime; multiple < MAX_VALUE; multiple += prime) {
                if (smallestPrimeFactor[multiple] === 0) {
                    smallestPrimeFactor[multiple] = prime
                }
            }
        }
    }

    return smallestPrimeFactor
}
