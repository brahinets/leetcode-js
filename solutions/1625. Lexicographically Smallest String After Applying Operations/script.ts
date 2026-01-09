export {findLexSmallestString}

const ZERO_ASCII: number = "0".charCodeAt(0)

function findLexSmallestString(s: string, a: number, b: number): string {
    let result: string = s
    const doubled: string = s + s
    const gcdStep: number = gcd(b, s.length)

    for (let rotation: number = 0; rotation < s.length; rotation += gcdStep) {
        for (let oddAdd: number = 0; oddAdd < 10; oddAdd++) {
            const evenAddLimit: number = b % 2 === 0 ? 0 : 9
            for (let evenAdd: number = 0; evenAdd <= evenAddLimit; evenAdd++) {
                const substring: string = doubled.substring(rotation, rotation + s.length)
                const candidate: string = applyOperations(substring, a, oddAdd, evenAdd)

                if (candidate < result) {
                    result = candidate
                }
            }
        }
    }

    return result
}

function applyOperations(s: string, a: number, oddAdd: number, evenAdd: number): string {
    const n: number = s.length
    const chars: string[] = s.split("")

    for (let i: number = 1; i < n; i += 2) {
        chars[i] = String.fromCharCode(ZERO_ASCII + ((chars[i].charCodeAt(0) - ZERO_ASCII + oddAdd * a) % 10))
    }

    for (let i: number = 0; i < n; i += 2) {
        chars[i] = String.fromCharCode(ZERO_ASCII + ((chars[i].charCodeAt(0) - ZERO_ASCII + evenAdd * a) % 10))
    }

    return chars.join("")
}

function gcd(a: number, b: number): number {
    while (b !== 0) {
        [a, b] = [b, a % b]
    }

    return a
}
