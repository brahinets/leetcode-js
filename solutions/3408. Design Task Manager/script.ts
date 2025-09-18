import {PriorityQueue} from "../../common/PriorityQueue"

export {TaskManager}

type Item = {
    userId: number
    taskId: number
    priority: number
}

const comparator: (a: Item, b: Item) => (number) = (a: Item, b: Item): number => {
    if (a.priority !== b.priority) {
        return b.priority - a.priority
    }

    return b.taskId - a.taskId
}

class TaskManager {

    private readonly pq: PriorityQueue<Item>
    private readonly map: Map<number, Item>

    constructor(tasks: number[][]) {
        this.pq = new PriorityQueue<Item>(comparator)
        this.map = new Map<number, Item>()

        for (const task of tasks) {
            const item = {userId: task[0], taskId: task[1], priority: task[2]}
            this.pq.enqueue(item)
            this.map.set(item.taskId, item)
        }
    }

    add(userId: number, taskId: number, priority: number): void {
        const item = {userId, taskId, priority}
        this.pq.enqueue(item)
        this.map.set(taskId, item)
    }

    edit(taskId: number, newPriority: number): void {
        const oldItem: Item | undefined = this.map.get(taskId)

        if (oldItem) {
            const newItem = {userId: oldItem.userId, taskId: oldItem.taskId, priority: newPriority}

            this.map.set(taskId, newItem)
            this.pq.enqueue(newItem)
        }
    }

    rmv(taskId: number): void {
        this.map.delete(taskId)
    }

    execTop(): number {
        while (this.pq.size() > 0) {
            const item: Item = this.pq.dequeue()!
            const currentItem: Item | undefined = this.map.get(item.taskId)

            if (currentItem && currentItem.userId === item.userId && currentItem.priority === item.priority) {
                this.map.delete(item.taskId)

                return item.userId
            }
        }

        return -1
    }
}
