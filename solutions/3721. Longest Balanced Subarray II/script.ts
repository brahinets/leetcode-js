export { longestBalanced }

class Node {
    l: number = 0
    r: number = 0
    mn: number = 0
    mx: number = 0
    lazy: number = 0
}

class SegmentTree {
    private tr: Node[]

    constructor(n: number) {
        this.tr = Array.from({ length: n << 2 }, () => new Node())
        this.build(1, 0, n)
    }

    private build(u: number, l: number, r: number): void {
        this.tr[u].l = l
        this.tr[u].r = r
        this.tr[u].mn = this.tr[u].mx = this.tr[u].lazy = 0
        if (l === r) return
        const mid = (l + r) >> 1
        this.build(u << 1, l, mid)
        this.build((u << 1) | 1, mid + 1, r)
    }

    modify(u: number, l: number, r: number, v: number): void {
        if (this.tr[u].l >= l && this.tr[u].r <= r) {
            this.apply(u, v)
            return
        }
        this.pushdown(u)
        const mid = (this.tr[u].l + this.tr[u].r) >> 1
        if (l <= mid) this.modify(u << 1, l, r, v)
        if (r > mid) this.modify((u << 1) | 1, l, r, v)
        this.pushup(u)
    }

    query(u: number, target: number): number {
        if (this.tr[u].l === this.tr[u].r) return this.tr[u].l
        this.pushdown(u)
        const lc = u << 1
        const rc = (u << 1) | 1
        if (this.tr[lc].mn <= target && target <= this.tr[lc].mx) {
            return this.query(lc, target)
        }
        return this.query(rc, target)
    }

    private apply(u: number, v: number): void {
        this.tr[u].mn += v
        this.tr[u].mx += v
        this.tr[u].lazy += v
    }

    private pushup(u: number): void {
        this.tr[u].mn = Math.min(this.tr[u << 1].mn, this.tr[(u << 1) | 1].mn)
        this.tr[u].mx = Math.max(this.tr[u << 1].mx, this.tr[(u << 1) | 1].mx)
    }

    private pushdown(u: number): void {
        if (this.tr[u].lazy !== 0) {
            this.apply(u << 1, this.tr[u].lazy)
            this.apply((u << 1) | 1, this.tr[u].lazy)
            this.tr[u].lazy = 0
        }
    }
}

function longestBalanced(nums: number[]): number {
    const n = nums.length
    const st = new SegmentTree(n)
    const last = new Map<number, number>()

    let now = 0
    let ans = 0

    for (let i = 1; i <= n; i++) {
        const x = nums[i - 1]
        const det = (x & 1) ? 1 : -1

        if (last.has(x)) {
            st.modify(1, last.get(x)!, n, -det)
            now -= det
        }

        last.set(x, i)
        st.modify(1, i, n, det)
        now += det

        const pos = st.query(1, now)
        ans = Math.max(ans, i - pos)
    }

    return ans
}
