import { findRotation } from '../script'

describe('1886. Determine Whether Matrix Can Be Obtained By Rotation', (): void => {
    it('true when mat equals target after 90-degree rotation', (): void => {
        expect(findRotation(
            [
                [0, 1],
                [1, 0]],
            [
                [1, 0],
                [0, 1]
            ]
        )).toBe(true)
    })

    it('false when mat cannot match target after any rotation', (): void => {
        expect(findRotation(
            [
                [0, 1],
                [1, 0]],
            [
                [1, 1],
                [0, 0]
            ]
        )).toBe(false)
    })

    it('true when mat equals target after 180-degree rotation', (): void => {
        expect(findRotation(
            [
                [0, 0, 0],
                [0, 1, 0],
                [1, 1, 1]],
            [
                [1, 1, 1],
                [0, 1, 0],
                [0, 0, 0]
            ]
        )).toBe(true)
    })

    it('true when mat already equals target without rotation', (): void => {
        expect(findRotation(
            [
                [1, 0],
                [0, 1]],
            [
                [1, 0],
                [0, 1]
            ]
        )).toBe(true)
    })

    it('true when mat equals target after 270-degree rotation', (): void => {
        expect(findRotation(
            [
                [1, 0, 0],
                [0, 0, 0],
                [0, 0, 1]],
            [
                [0, 0, 1],
                [0, 0, 0],
                [1, 0, 0]
            ]
        )).toBe(true)
    })
})
