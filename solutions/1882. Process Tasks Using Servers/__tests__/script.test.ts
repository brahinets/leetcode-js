import { assignTasks } from '../script'


describe('1882. Process Tasks Using Servers', (): void => {
    it('example 1', (): void => {
        const servers: number[] = [3, 3, 2]
        const tasks: number[] = [1, 2, 3, 2, 1, 2]
        const result: number[] = assignTasks(servers, tasks)

        expect(result)
            .toEqual([2, 2, 0, 2, 1, 2])
    })

    it('example 2', (): void => {
        const servers: number[] = [5, 1, 4, 3, 2]
        const tasks: number[] = [2, 1, 2, 4, 5, 2, 1]
        const result: number[] = assignTasks(servers, tasks)

        expect(result)
            .toEqual([1, 4, 1, 4, 1, 3, 2])
    })
})
