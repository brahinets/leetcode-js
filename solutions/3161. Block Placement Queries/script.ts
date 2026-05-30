export {getResults}

const MAX_POSITION: number = 50001
const EMPTY: number = -1

interface SegmentTreeNode {
    maxGap: number
    leftActive: number
    rightActive: number
}

function merge(left: SegmentTreeNode, right: SegmentTreeNode): SegmentTreeNode {
    const result: SegmentTreeNode = {
        maxGap: Math.max(left.maxGap, right.maxGap),
        leftActive: left.leftActive !== EMPTY ? left.leftActive : right.leftActive,
        rightActive: right.rightActive !== EMPTY ? right.rightActive : left.rightActive,
    }

    if (left.rightActive !== EMPTY && right.leftActive !== EMPTY) {
        result.maxGap = Math.max(result.maxGap, right.leftActive - left.rightActive)
    }

    return result
}

class SegmentTree {
    private readonly tree: SegmentTreeNode[]
    private readonly size: number

    constructor(size: number) {
        this.size = size
        this.tree = new Array<SegmentTreeNode>(4 * size).fill({maxGap: 0, leftActive: EMPTY, rightActive: EMPTY})
    }

    insert(node: number, start: number, end: number, position: number): void {
        if (start === end) {
            this.tree[node] = {maxGap: 0, leftActive: position, rightActive: position}
            return
        }

        const mid: number = Math.floor((start + end) / 2)

        if (position <= mid) {
            this.insert(2 * node, start, mid, position)
        } else {
            this.insert(2 * node + 1, mid + 1, end, position)
        }

        this.tree[node] = merge(this.tree[2 * node], this.tree[2 * node + 1])
    }

    query(node: number, start: number, end: number, left: number, right: number): SegmentTreeNode {
        if (left <= start && end <= right) {
            return this.tree[node]
        }

        const mid: number = Math.floor((start + end) / 2)

        if (right <= mid) {
            return this.query(2 * node, start, mid, left, right)
        }

        if (left > mid) {
            return this.query(2 * node + 1, mid + 1, end, left, right)
        }

        const leftResult: SegmentTreeNode = this.query(2 * node, start, mid, left, right)
        const rightResult: SegmentTreeNode = this.query(2 * node + 1, mid + 1, end, left, right)

        return merge(leftResult, rightResult)
    }

    addObstacle(position: number): void {
        this.insert(1, 0, this.size - 1, position)
    }

    queryRange(left: number, right: number): SegmentTreeNode {
        return this.query(1, 0, this.size - 1, left, right)
    }
}

function getResults(queries: readonly (readonly number[])[]): boolean[] {
    const tree: SegmentTree = new SegmentTree(MAX_POSITION)
    tree.addObstacle(0)

    const results: boolean[] = []

    for (const query of queries) {
        const type: number = query[0]

        if (type === 1) {
            tree.addObstacle(query[1])
        } else {
            const position: number = query[1]
            const size: number = query[2]
            const rangeResult: SegmentTreeNode = tree.queryRange(0, position)
            const rightGap: number = rangeResult.rightActive !== EMPTY ? position - rangeResult.rightActive : position
            const maxFit: number = Math.max(rangeResult.maxGap, rightGap)

            results.push(maxFit >= size)
        }
    }

    return results
}
