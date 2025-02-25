import {matrixOf} from "../../common/array-factories"

export {checkIfPrerequisite}

function checkIfPrerequisite(numCourses: number, prerequisites: number[][], queries: number[][]): boolean[] {
    const graph: boolean[][] = matrixOf(false, numCourses, numCourses)
    for (const [course, prerequisite] of prerequisites) {
        graph[course][prerequisite] = true
    }

    for (let k: number = 0; k < numCourses; k++) {
        for (let i: number = 0; i < numCourses; i++) {
            for (let j: number = 0; j < numCourses; j++) {
                graph[i][j] = graph[i][j] || (graph[i][k] && graph[k][j])
            }
        }
    }

    return queries.map(([course, prerequisite]: number[]): boolean => graph[course][prerequisite])
}
