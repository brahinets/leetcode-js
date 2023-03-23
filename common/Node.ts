export class Node {
    val: number
    children: Node[]

    constructor(val: number, children: Node[]) {
        this.val = val;
        this.children = children;
    }
}