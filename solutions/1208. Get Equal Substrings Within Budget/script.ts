export {equalSubstring}

function equalSubstring(s: string, t: string, maxCost: number): number {
    const costs: number[] = []
    for (let i = 0; i < s.length; i++) {
        costs.push(Math.abs(s[i].charCodeAt(0) - t[i].charCodeAt(0)))
    }

    let max: number = 0
    for (let start = 0; start < s.length; start++) {
        let availableCosts: number = maxCost

        let end: number = start
        while (availableCosts - costs[end] >= 0) {
            availableCosts -= costs[end]
            end++
        }

        max = Math.max(end - start, max)
    }

    return max
}
