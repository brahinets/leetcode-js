import {TaskManager} from '../script'

describe('3408. Design Task Manager', (): void => {
    it('Test', (): void => {
        const taskManager: TaskManager = new TaskManager([[1, 101, 10], [2, 102, 20], [3, 103, 15]])

        taskManager.add(4, 104, 5)
        taskManager.edit(102, 8)
        expect(taskManager.execTop())
            .toBe(3)

        taskManager.rmv(101)
        taskManager.add(5, 105, 15)
        expect(taskManager.execTop())
            .toBe(5)
    })
})
