export {minimumTeachings}

function minimumTeachings(n: number, languages: number[][], friendships: number[][]): number {
    const needToTeach: Set<number> = new Set<number>()
    const languageMap: Map<number, Set<number>> = new Map<number, Set<number>>()

    for (let i: number = 0; i < languages.length; i++) {
        languageMap.set(i + 1, new Set(languages[i]))
    }

    for (const [friendA, friendB] of friendships) {
        const langA: Set<number> | undefined = languageMap.get(friendA)
        const langB: Set<number> | undefined = languageMap.get(friendB)

        if (langA && langB) {
            const commonLanguages: Set<number> = new Set(
                [...langA].filter((lang: number): boolean => langB.has(lang)),
            )

            if (commonLanguages.size === 0) {
                needToTeach.add(friendA)
                needToTeach.add(friendB)
            }
        }
    }

    if (needToTeach.size === 0) {
        return 0
    }

    const languageCount: Map<number, number> = new Map<number, number>()
    for (const person of needToTeach) {
        const langs: Set<number> | undefined = languageMap.get(person)

        if (langs) {
            for (const lang of langs) {
                languageCount.set(lang, (languageCount.get(lang) ?? 0) + 1)
            }
        }
    }

    let maxKnown: number = 0
    for (const count of languageCount.values()) {
        maxKnown = Math.max(maxKnown, count)
    }

    return needToTeach.size - maxKnown
}
