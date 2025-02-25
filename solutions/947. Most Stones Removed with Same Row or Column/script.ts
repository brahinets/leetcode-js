import {arrayOf} from "../../common/array-factories"

export {removeStones}

function removeStones(stones: number[][]): number {
    const adjacency: number[][] = arrayOf([], stones.length)
    for (let i: number = 0; i < stones.length; i++) {
        for (let j: number = i + 1; j < stones.length; j++) {
            if (stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]) {
                adjacency[i].push(j)
                adjacency[j].push(i)
            }
        }
    }

    let numOfConnectedComponents: number = 0
    const visited: boolean[] = arrayOf(false, stones.length)
    for (let i: number = 0; i < stones.length; i++) {
        if (!visited[i]) {
            dfs(adjacency, visited, i)
            numOfConnectedComponents++
        }
    }

    return stones.length - numOfConnectedComponents
}

function dfs(adjacencyList: number[][], visited: boolean[], stone: number): void {
    visited[stone] = true

    for (const neighbor of adjacencyList[stone]) {
        if (!visited[neighbor]) {
            dfs(adjacencyList, visited, neighbor)
        }
    }
}

