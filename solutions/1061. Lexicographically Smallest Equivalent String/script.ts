import {arrayOfZeros} from "../../common/array-factories"

export {smallestEquivalentString}

function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
    const parent: number[] = arrayOfZeros(26).map((_, idx: number): number => idx)
    const aCharCode: number = 'a'.charCodeAt(0)

    for (let i: number = 0; i < s1.length; i++) {
        const x: number = s1.charCodeAt(i) - aCharCode
        const y: number = s2.charCodeAt(i) - aCharCode
        union(x, y, parent)
    }

    let result: string = ''
    for (let i: number = 0; i < baseStr.length; i++) {
        const idx: number = baseStr.charCodeAt(i) - aCharCode
        const smallestIdx: number = find(idx, parent)
        result += String.fromCharCode(smallestIdx + aCharCode)
    }

    return result
}

function find(x: number, parent: number[]): number {
    while (parent[x] !== x) {
        parent[x] = parent[parent[x]]
        x = parent[x]
    }

    return x
}

function union(x: number, y: number, parent: number[]): void {
    const rootX: number = find(x, parent)
    const rootY: number = find(y, parent)
    const minRoot: number = Math.min(rootX, rootY)

    parent[rootX] = minRoot
    parent[rootY] = minRoot
}
