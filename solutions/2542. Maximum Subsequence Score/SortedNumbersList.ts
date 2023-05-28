import {ListNode} from "../../common/ListNode";

export class SortedNumbersList {
    private head: ListNode | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(val: number): void {
        let cursor: ListNode | null = this.head;
        let prev: ListNode | null = null;

        while (cursor && cursor?.val < val) {
            prev = cursor;
            cursor = cursor.next;
        }

        let newNode: ListNode = new ListNode(val);
        newNode.next = cursor;
        if (prev) {
            prev.next = newNode;
        } else {
            this.head = newNode;
        }
        this.size++;
    }

    removeAt(index: number): void {
        let cursor: ListNode | null = this.head;
        let prev: ListNode | null = null;
        let i: number = 0;

        while (cursor && i < index) {
            prev = cursor;
            cursor = cursor.next;
            i++;
        }

        if (i === index) {
            if (prev) {
                prev.next = cursor?.next ?? null;
                this.size--;
            } else {
                if (cursor?.next) {
                    this.head = cursor.next;
                    this.size--;
                } else {
                    this.head = null;
                    this.size = 0;
                }
            }
        }
    }

    getSize(): number {
        return this.size;
    }

    toArray(): number[] {
        const result: number[] = [];

        let cursor: ListNode | null = this.head;
        while (cursor) {
            result.push(cursor.val);
            cursor = cursor.next;
        }

        return result;
    }
}