import { Robot } from '../script'

describe('2069. Walking Robot Simulation II', (): void => {
    it('initial position before any step', (): void => {
        const robot = new Robot(6, 3)
        expect(robot.getPos()).toEqual([0, 0])
    })

    it('moves East along bottom after 2 steps', (): void => {
        const robot = new Robot(6, 3)
        robot.step(2)
        expect(robot.getPos()).toEqual([2, 0])
        expect(robot.getDir()).toBe('East')
    })

    it('[4,0] East after step(2)+step(2)', (): void => {
        const robot = new Robot(6, 3)
        robot.step(2)
        robot.step(2)
        expect(robot.getPos()).toEqual([4, 0])
        expect(robot.getDir()).toBe('East')
    })

    it('bottom-right corner (5,0) has East direction', (): void => {
        const robot = new Robot(6, 3)
        robot.step(5)
        expect(robot.getPos()).toEqual([5, 0])
        expect(robot.getDir()).toBe('East')
    })

    it('[1,2] West after 11 cumulative steps', (): void => {
        const robot = new Robot(6, 3)
        robot.step(2)
        robot.step(2)
        robot.step(2)
        robot.step(1)
        robot.step(4)
        expect(robot.getPos()).toEqual([1, 2])
        expect(robot.getDir()).toBe('West')
    })

    it('top-left corner (0,2) has West direction', (): void => {
        const robot = new Robot(6, 3)
        robot.step(12)
        expect(robot.getPos()).toEqual([0, 2])
        expect(robot.getDir()).toBe('West')
    })

    it('wraps full perimeter back to origin facing South', (): void => {
        const robot = new Robot(6, 3)
        const perimeter = 2 * (6 - 1) + 2 * (3 - 1) // 14
        robot.step(perimeter)
        expect(robot.getPos()).toEqual([0, 0])
        expect(robot.getDir()).toBe('South')
    })

    it('handles large step count by using modulo', (): void => {
        const robot = new Robot(6, 3)
        const perimeter = 2 * (6 - 1) + 2 * (3 - 1) // 14
        robot.step(perimeter + 2)
        expect(robot.getPos()).toEqual([2, 0])
        expect(robot.getDir()).toBe('East')
    })

    it('traverses West segment correctly', (): void => {
        const robot = new Robot(6, 3)
        // index 9 = (3,2) West
        robot.step(9)
        expect(robot.getPos()).toEqual([3, 2])
        expect(robot.getDir()).toBe('West')
    })

    it('handles 2x2 grid after 3 steps', (): void => {
        const robot = new Robot(2, 2)
        // perimeter: (0,0)S (1,0)E (1,1)N (0,1)W
        robot.step(3)
        expect(robot.getPos()).toEqual([0, 1])
        expect(robot.getDir()).toBe('West')
    })

    it('20x13 grid: step(12)+step(21) → [17,12] West', (): void => {
        const robot = new Robot(20, 13)
        robot.step(12)
        robot.step(21)
        expect(robot.getPos()).toEqual([17, 12])
        expect(robot.getDir()).toBe('West')
    })

    it('20x13 grid: step(12)+step(21)+step(17) → [0,12] West', (): void => {
        const robot = new Robot(20, 13)
        robot.step(12)
        robot.step(21)
        robot.step(17)
        expect(robot.getPos()).toEqual([0, 12])
        expect(robot.getDir()).toBe('West')
    })
})
