export {equalSubstring}

function equalSubstring(s: string, t: string, maxCost: number): number {
    const costs: number[] = []
    for (let i = 0; i < s.length; i++) {
        costs.push(Math.abs(s[i].charCodeAt(0) - t[i].charCodeAt(0)))
    }

    let max: number = 0
    for (let start = 0; start < s.length; start++) {
        let hasCostsFor: number = 0
        let availableCosts: number = maxCost

        for (let j = start; j < costs.length; j++) {
            if (availableCosts - costs[j] >= 0) {
                availableCosts -= costs[j]
                hasCostsFor++
            } else {
                break
            }
        }

        max = Math.max(hasCostsFor, max)
    }

    return max
}
