import { largestInteger } from '../script'

describe('3471. Find the Largest Almost Missing Integer', (): void => {

    it('unique edge element in a middle-sized window', (): void => {
        // Arrange
        const nums: number[] = [3, 9, 2, 1, 7]
        const k: number = 3

        // Act
        const result: number = largestInteger(nums, k)

        // Assert
        expect(result)
            .toBe(7)
    })

    it('repeated edge leaves the other edge as the answer', (): void => {
        // Arrange
        const nums: number[] = [3, 9, 7, 2, 1, 7]
        const k: number = 4

        // Act
        const result: number = largestInteger(nums, k)

        // Assert
        expect(result)
            .toBe(3)
    })

    it('no almost missing integer when edge values repeat', (): void => {
        // Arrange
        const nums: number[] = [0, 0]
        const k: number = 1

        // Act
        const result: number = largestInteger(nums, k)

        // Assert
        expect(result)
            .toBe(-1)
    })

    it('window covering the whole array picks the maximum', (): void => {
        // Arrange
        const nums: number[] = [4, 50, 4, 12]
        const k: number = 4

        // Act
        const result: number = largestInteger(nums, k)

        // Assert
        expect(result)
            .toBe(50)
    })

    it('single element array', (): void => {
        // Arrange
        const nums: number[] = [0]
        const k: number = 1

        // Act
        const result: number = largestInteger(nums, k)

        // Assert
        expect(result)
            .toBe(0)
    })

    it('single element windows pick the largest unique value', (): void => {
        // Arrange
        const nums: number[] = [5, 8, 8, 2, 5, 3]
        const k: number = 1

        // Act
        const result: number = largestInteger(nums, k)

        // Assert
        expect(result)
            .toBe(3)
    })

    it('middle value spanning several windows is ignored', (): void => {
        // Arrange
        const nums: number[] = [1, 50, 2]
        const k: number = 2

        // Act
        const result: number = largestInteger(nums, k)

        // Assert
        expect(result)
            .toBe(2)
    })

    it('edge values reappearing inside are not almost missing', (): void => {
        // Arrange
        const nums: number[] = [6, 1, 6, 9, 9]
        const k: number = 2

        // Act
        const result: number = largestInteger(nums, k)

        // Assert
        expect(result)
            .toBe(-1)
    })
})
