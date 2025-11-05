export {findXSum}

type FrequencyPair = [number, number]

type Comparator<T> = (a: T, b: T) => number

function comparator(a: FrequencyPair, b: FrequencyPair): number {
    if (a[0] !== b[0]) {
        return a[0] - b[0]
    }

    return a[1] - b[1]
}

function findXSum(nums: number[], k: number, x: number): number[] {
    const topXSumHelper = new TopXFrequencySum(x)
    const result: number[] = []

    for (let i: number = 0; i < nums.length; i++) {
        topXSumHelper.insert(nums[i])

        if (i >= k) {
            topXSumHelper.remove(nums[i - k])
        }

        if (i >= k - 1) {
            result.push(topXSumHelper.getTopXSum())
        }
    }

    return result
}

class TopXFrequencySum {
    private readonly x: number
    private topXSum: bigint
    private topXTree: AvlTree<FrequencyPair>
    private remainingTree: AvlTree<FrequencyPair>
    private frequencyMap: Map<number, number>

    constructor(x: number) {
        this.x = x
        this.topXSum = 0n

        this.topXTree = new AvlTree<FrequencyPair>(comparator)
        this.remainingTree = new AvlTree<FrequencyPair>(comparator)
        this.frequencyMap = new Map<number, number>()
    }

    insert(num: number): void {
        const currentFrequency: number = this.frequencyMap.get(num) || 0
        if (currentFrequency > 0) {
            this.removeFromTrees([currentFrequency, num])
        }

        const newFrequency: number = currentFrequency + 1

        this.frequencyMap.set(num, newFrequency)

        this.insertToTrees([newFrequency, num])
    }

    remove(num: number): void {
        const currentFreq: number | undefined = this.frequencyMap.get(num)

        if (currentFreq === undefined || currentFreq === 0) {
            return
        }

        this.removeFromTrees([currentFreq, num])

        const newFrequency: number = currentFreq - 1
        if (newFrequency > 0) {
            this.frequencyMap.set(num, newFrequency)
            this.insertToTrees([newFrequency, num])
        } else {
            this.frequencyMap.delete(num)
        }
    }

    getTopXSum(): number {
        return Number(this.topXSum)
    }

    private insertToTrees(p: FrequencyPair): void {
        const [freq, value]: [number, number] = p
        const minTopX: AvlNode<FrequencyPair> | null = this.topXTree.min()
        if (this.topXTree.count() < this.x || (minTopX && comparator(p, minTopX.value) > 0)) {
            this.topXSum += BigInt(freq) * BigInt(value)
            this.topXTree.insert(p)

            if (this.topXTree.count() > this.x) {
                const smallestTopX: AvlNode<FrequencyPair> | null = this.topXTree.min()

                if (smallestTopX) {
                    const value: FrequencyPair = smallestTopX.value

                    this.topXSum -= BigInt(value[0]) * BigInt(value[1])
                    this.topXTree.remove(value)
                    this.remainingTree.insert(value)
                }
            }
        } else {
            this.remainingTree.insert(p)
        }
    }

    private removeFromTrees(p: FrequencyPair): void {
        const [freq, value]: [number, number] = p

        if (this.topXTree.has(p)) {
            this.topXSum -= BigInt(freq) * BigInt(value)
            this.topXTree.remove(p)

            if (this.remainingTree.count() > 0) {
                const largestRemaining: AvlNode<FrequencyPair> | null = this.remainingTree.max()

                if (largestRemaining) {
                    const value: [number, number] = largestRemaining.value
                    this.topXSum += BigInt(value[0]) * BigInt(value[1])
                    this.remainingTree.remove(value)
                    this.topXTree.insert(value)
                }
            }
        } else {
            this.remainingTree.remove(p)
        }
    }
}

class AvlNode<T> {
    value: T
    left: AvlNode<T> | null = null
    right: AvlNode<T> | null = null
    height: number = 1

    constructor(value: T) {
        this.value = value
    }
}

class AvlTree<T> {
    private root: AvlNode<T> | null = null
    private readonly comparator: Comparator<T>
    private countValue: number = 0

    constructor(comparator: Comparator<T>) {
        this.comparator = comparator
    }

    insert(value: T): void {
        this.root = this.insertNode(this.root, value)
        this.countValue++
    }

    remove(value: T): void {
        if (this.has(value)) {
            this.root = this.removeNode(this.root, value)
            this.countValue--
        }
    }

    has(value: T): boolean {
        let node: AvlNode<T> | null = this.root

        while (node) {
            const cmp: number = this.comparator(value, node.value)
            if (cmp === 0) {
                return true
            }

            node = cmp < 0 ? node.left : node.right
        }

        return false
    }

    min(): AvlNode<T> | null {
        let node: AvlNode<T> | null = this.root

        if (!node) {
            return null
        }

        while (node.left) {
            node = node.left
        }

        return node
    }

    max(): AvlNode<T> | null {
        let node: AvlNode<T> | null = this.root

        if (!node) {
            return null
        }

        while (node.right) {
            node = node.right
        }

        return node
    }

    count(): number {
        return this.countValue
    }

    private height(node: AvlNode<T> | null): number {
        return node ? node.height : 0
    }

    private balance(node: AvlNode<T>): number {
        return this.height(node.left) - this.height(node.right)
    }

    private updateHeight(node: AvlNode<T>): void {
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right))
    }

    private rotateRight(y: AvlNode<T>): AvlNode<T> {
        const x: AvlNode<T> = y.left!

        y.left = x.right
        x.right = y

        this.updateHeight(y)
        this.updateHeight(x)

        return x
    }

    private rotateLeft(x: AvlNode<T>): AvlNode<T> {
        const y: AvlNode<T> = x.right!

        x.right = y.left
        y.left = x

        this.updateHeight(x)
        this.updateHeight(y)

        return y
    }

    private insertNode(node: AvlNode<T> | null, value: T): AvlNode<T> {
        if (!node) {
            return new AvlNode(value)
        }

        const cmp: number = this.comparator(value, node.value)
        if (cmp < 0) {
            node.left = this.insertNode(node.left, value)
        } else if (cmp > 0) {
            node.right = this.insertNode(node.right, value)
        } else {
            return node
        }

        this.updateHeight(node)

        return this.rebalance(node)
    }

    private removeNode(node: AvlNode<T> | null, value: T): AvlNode<T> | null {
        if (!node) {
            return null
        }

        const cmp: number = this.comparator(value, node.value)

        if (cmp < 0) {
            node.left = this.removeNode(node.left, value)
        } else if (cmp > 0) {
            node.right = this.removeNode(node.right, value)
        } else {
            if (!node.left || !node.right) {
                return node.left || node.right
            }

            let minLarger: AvlNode<T> = node.right
            while (minLarger.left) {
                minLarger = minLarger.left
            }

            node.value = minLarger.value
            node.right = this.removeNode(node.right, minLarger.value)
        }

        this.updateHeight(node)

        return this.rebalance(node)
    }

    private rebalance(node: AvlNode<T>): AvlNode<T> {
        const balance: number = this.balance(node)

        if (balance > 1) {
            if (this.balance(node.left!) < 0) {
                node.left = this.rotateLeft(node.left!)
            }

            return this.rotateRight(node)
        }

        if (balance < -1) {
            if (this.balance(node.right!) > 0) {
                node.right = this.rotateRight(node.right!)
            }

            return this.rotateLeft(node)
        }

        return node
    }
}
