import {arrayOfZeros} from "../../common/array-factories"

export {minimumTeachings}

function minimumTeachings(n: number, languages: number[][], friendships: number[][]): number {
    const needToTeach = new Set<number>()
    for (const [a, b] of friendships) {
        const setA: Set<number> = new Set<number>(languages[a - 1])
        const setB: Set<number> = new Set<number>(languages[b - 1])

        const common: boolean = [...setA].some((lang: number): boolean => setB.has(lang))
        if (!common) {
            needToTeach.add(a)
            needToTeach.add(b)
        }
    }

    if (needToTeach.size === 0) {
        return 0
    }

    const langCount: number[] = arrayOfZeros(n + 1)
    for (const person of needToTeach) {
        for (const lang of languages[person - 1]) {
            langCount[lang]++
        }
    }

    const maxKnown: number = Math.max(...langCount)
    return needToTeach.size - maxKnown
}
