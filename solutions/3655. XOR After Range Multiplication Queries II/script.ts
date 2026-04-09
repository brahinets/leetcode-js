export { xorAfterQueries }

const MODULUS: number = 1_000_000_007

function mulmod(first: number, second: number): number {
    const secondHigh: number = second >>> 15
    const secondLow: number = second & 0x7FFF
    return ((first * secondLow % MODULUS) + (first * secondHigh % MODULUS) * 32768) % MODULUS
}

function modPow(base: number, exponent: number): number {
    let result: number = 1
    base = base % MODULUS
    while (exponent > 0) {
        if (exponent & 1) {
            result = mulmod(result, base)
        }
        exponent >>>= 1
        base = mulmod(base, base)
    }
    return result
}

function xorAfterQueries(nums: number[], queries: number[][]): number {
    const length: number = nums.length
    const blockSize: number = Math.ceil(Math.sqrt(length))

    const totalMultiplier: Float64Array = new Float64Array(length).fill(1)

    const queriesByStep: number[][] = new Array(blockSize)

    for (const [left, right, step, multiplier] of queries) {
        if (step >= blockSize) {
            for (let index = left; index <= right; index += step) {
                totalMultiplier[index] = totalMultiplier[index] * multiplier % MODULUS
            }
        } else {
            if (queriesByStep[step] === undefined) {
                queriesByStep[step] = []
            }
            queriesByStep[step].push(left, right, multiplier)
        }
    }

    const inverseCache: number[] = []
    const diff: Float64Array = new Float64Array(length + 1).fill(1)
    const touchedPositions: number[] = []
    const activeResidues: number[] = []
    const activeResidueMark: Uint8Array = new Uint8Array(blockSize)

    for (let step = 1; step < blockSize; step++) {
        const stepQueries: number[] | undefined = queriesByStep[step]
        if (stepQueries === undefined) { continue }

        for (let qi = 0; qi < stepQueries.length; qi += 3) {
            const left: number = stepQueries[qi]
            const right: number = stepQueries[qi + 1]
            const multiplier: number = stepQueries[qi + 2]

            const residue: number = left % step
            if (!activeResidueMark[residue]) {
                activeResidueMark[residue] = 1
                activeResidues.push(residue)
            }

            const last: number = left + ((right - left) / step | 0) * step
            diff[left] = diff[left] * multiplier % MODULUS
            touchedPositions.push(left)

            if (last + step < length) {
                let inverse: number = inverseCache[multiplier]
                if (inverse === undefined) {
                    inverse = modPow(multiplier, MODULUS - 2)
                    inverseCache[multiplier] = inverse
                }
                diff[last + step] = mulmod(diff[last + step], inverse)
                touchedPositions.push(last + step)
            }
        }

        for (let ri = 0; ri < activeResidues.length; ri++) {
            let prefixProduct: number = 1
            for (let index = activeResidues[ri]; index < length; index += step) {
                const diffValue: number = diff[index]
                if (diffValue !== 1) {
                    const dhi: number = diffValue >>> 15
                    const dlo: number = diffValue & 0x7FFF
                    prefixProduct = ((prefixProduct * dlo % MODULUS) + (prefixProduct * dhi % MODULUS) * 32768) % MODULUS
                }
                if (prefixProduct !== 1) {
                    const tm: number = totalMultiplier[index]
                    const phi: number = prefixProduct >>> 15
                    const plo: number = prefixProduct & 0x7FFF
                    totalMultiplier[index] = ((tm * plo % MODULUS) + (tm * phi % MODULUS) * 32768) % MODULUS
                }
            }
        }

        for (let ti = 0; ti < touchedPositions.length; ti++) {
            diff[touchedPositions[ti]] = 1
        }
        touchedPositions.length = 0

        for (let ri = 0; ri < activeResidues.length; ri++) {
            activeResidueMark[activeResidues[ri]] = 0
        }
        activeResidues.length = 0
    }

    let result: number = 0
    for (let index = 0; index < length; index++) {
        result ^= mulmod(nums[index], totalMultiplier[index])
    }

    return result
}
