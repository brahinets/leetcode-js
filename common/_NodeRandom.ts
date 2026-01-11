export class _NodeRandom {
    val: number
    next: _NodeRandom | null
    random: _NodeRandom | null

    constructor(val?: number, next?: _NodeRandom, random?: _NodeRandom) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
        this.random = (random === undefined ? null : random)
    }
}
