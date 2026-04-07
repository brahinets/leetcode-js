import { Robot } from '../script'

describe('2069. Walking Robot Simulation II', (): void => {
    it('returns initial position before any step', (): void => {
        const robot = new Robot(6, 3)
        expect(robot.getPos()).toEqual([0, 0])
    })

    it('returns South direction before any step', (): void => {
        const robot = new Robot(6, 3)
        expect(robot.getDir()).toBe('South')
    })

    it('moves North after first 2 steps', (): void => {
        const robot = new Robot(6, 3)
        robot.step(2)
        expect(robot.getPos()).toEqual([0, 2])
        expect(robot.getDir()).toBe('North')
    })

    it('moves East after reaching top-left corner', (): void => {
        const robot = new Robot(6, 3)
        robot.step(2)
        robot.step(2)
        expect(robot.getPos()).toEqual([2, 2])
        expect(robot.getDir()).toBe('East')
    })

    it('continues East along top edge', (): void => {
        const robot = new Robot(6, 3)
        robot.step(2)
        robot.step(2)
        robot.step(2)
        expect(robot.getPos()).toEqual([4, 2])
        expect(robot.getDir()).toBe('East')
    })

    it('wraps full perimeter back to origin facing North', (): void => {
        const robot = new Robot(6, 3)
        const perimeter = 2 * (6 - 1) + 2 * (3 - 1) // 14
        robot.step(perimeter)
        expect(robot.getPos()).toEqual([0, 0])
        expect(robot.getDir()).toBe('North')
    })

    it('handles large step count by using modulo', (): void => {
        const robot = new Robot(6, 3)
        const perimeter = 2 * (6 - 1) + 2 * (3 - 1) // 14
        robot.step(perimeter + 2)
        expect(robot.getPos()).toEqual([0, 2])
        expect(robot.getDir()).toBe('North')
    })

    it('returns South after step at top-left (width=2, height=2)', (): void => {
        const robot = new Robot(2, 2)
        robot.step(3)
        expect(robot.getPos()).toEqual([1, 0])
        expect(robot.getDir()).toBe('South')
    })

    it('traverses West segment correctly', (): void => {
        const robot = new Robot(6, 3)
        // North: indices 0-2, East: indices 3-7, South: indices 8-9, West: indices 10-13
        // index 10 = (4,0) West
        robot.step(10)
        expect(robot.getPos()).toEqual([4, 0])
        expect(robot.getDir()).toBe('West')
    })
})
