export {findMaximizedCapital}

function findMaximizedCapital(
    numProjects: number,
    initialCapital: number,
    profits: number[],
    capital: number[]
): number {
    const projects: Project[] = collectProjects(profits, capital)

    let result: number = initialCapital
    let projectIndex: number = 0
    const n: number = projects.length
    const maxHeap: number[] = []

    while (numProjects > 0) {
        while (projectIndex < n && projects[projectIndex].capital <= result) {
            maxHeap.push(projects[projectIndex].profit)
            projectIndex++
        }

        if (maxHeap.length === 0) {
            break
        }

        const maxProfit: number = Math.max(...maxHeap)
        const maxProfitIndex: number = maxHeap.findIndex((profit: number): boolean => profit === maxProfit)
        maxHeap.splice(maxProfitIndex, 1)
        result += maxProfit
        numProjects--
    }

    return result
}

function collectProjects(profits: number[], capital: number[]): Project[] {
    const projects: Project[] = []

    for (let i: number = 0; i < profits.length; i++) {
        projects.push(new Project(profits[i], capital[i]))
    }

    projects.sort((a: Project, b: Project): number => a.capital - b.capital)

    return projects
}

class Project {
    constructor(profit: number, capital: number) {
        this.profit = profit
        this.capital = capital
    }

    readonly profit: number
    readonly capital: number
}
