import {MovieRentingSystem} from '../script'

describe('1912. Design Movie Rental System', (): void => {
    it('Test', (): void => {
        const movieRentingSystem: MovieRentingSystem = new MovieRentingSystem(
            3,
            [[0, 1, 5], [0, 2, 6], [0, 3, 7], [1, 1, 4], [1, 2, 7], [2, 1, 5]]
        )
        expect(movieRentingSystem.search(1)).toEqual([1, 0, 2])

        movieRentingSystem.rent(0, 1)
        movieRentingSystem.rent(1, 2)
        expect(movieRentingSystem.report()).toEqual([[0, 1], [1, 2]])
        movieRentingSystem.drop(1, 2)

        movieRentingSystem.search(2)
        expect(movieRentingSystem.search(2)).toEqual([0, 1])
    })
})
