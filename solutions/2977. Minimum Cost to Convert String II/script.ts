import { matrixOf } from '../../common/array-factories'

export { minimumCost }

const INF: number = Number.MAX_SAFE_INTEGER

interface TrieNode {
    children: Map<string, TrieNode>
    stringId: number
}

function minimumCost(
    source: string,
    target: string,
    original: string[],
    changed: string[],
    cost: number[]
): number {
    const sourceLength: number = source.length
    const trie: TrieNode = { children: new Map(), stringId: -1 }
    let stringIdCount: number = 0

    function getOrCreateStringId(str: string): number {
        let node: TrieNode = trie

        for (const char of str) {
            if (!node.children.has(char)) {
                node.children.set(char, { children: new Map(), stringId: -1 })
            }
            node = node.children.get(char)!
        }

        if (node.stringId === -1) {
            node.stringId = stringIdCount++
        }

        return node.stringId
    }

    function getSubstringIds(str: string, position: number): Map<number, number> {
        const ids: Map<number, number> = new Map()
        let node: TrieNode = trie

        for (let i: number = position; i < sourceLength; i++) {
            if (!node.children.has(str[i])) break
            node = node.children.get(str[i])!
            if (node.stringId !== -1) {
                ids.set(i - position + 1, node.stringId)
            }
        }

        return ids
    }

    for (let i: number = 0; i < original.length; i++) {
        getOrCreateStringId(original[i])
        getOrCreateStringId(changed[i])
    }

    const minCost: number[][] = matrixOf(INF, stringIdCount, stringIdCount)

    for (let i: number = 0; i < stringIdCount; i++) {
        minCost[i][i] = 0
    }

    for (let i: number = 0; i < original.length; i++) {
        const from: number = getOrCreateStringId(original[i])
        const to: number = getOrCreateStringId(changed[i])
        minCost[from][to] = Math.min(minCost[from][to], cost[i])
    }

    for (let k: number = 0; k < stringIdCount; k++) {
        for (let i: number = 0; i < stringIdCount; i++) {
            if (minCost[i][k] === INF) continue
            for (let j: number = 0; j < stringIdCount; j++) {
                if (minCost[k][j] === INF) continue
                minCost[i][j] = Math.min(minCost[i][j], minCost[i][k] + minCost[k][j])
            }
        }
    }

    const lengths: number[] = [...new Set([...original, ...changed].map((s: string): number => s.length))]
        .sort((a: number, b: number): number => a - b)

    const cache: Map<number, number> = new Map()

    function findMinCost(position: number): number {
        if (position >= sourceLength) return 0
        if (cache.has(position)) return cache.get(position)!

        let result: number = source[position] === target[position] ? findMinCost(position + 1) : INF

        const sourceIds: Map<number, number> = getSubstringIds(source, position)
        const targetIds: Map<number, number> = getSubstringIds(target, position)

        for (const len of lengths) {
            if (position + len > sourceLength) break
            if (!sourceIds.has(len) || !targetIds.has(len)) continue

            const srcId: number = sourceIds.get(len)!
            const tgtId: number = targetIds.get(len)!

            if (minCost[srcId][tgtId] === INF) continue

            const rest: number = findMinCost(position + len)
            if (rest !== INF) {
                result = Math.min(result, minCost[srcId][tgtId] + rest)
            }
        }

        cache.set(position, result)
        return result
    }

    const totalCost: number = findMinCost(0)
    return totalCost === INF ? -1 : totalCost
}
