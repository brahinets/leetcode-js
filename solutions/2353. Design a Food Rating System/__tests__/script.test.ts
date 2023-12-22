import {FoodRatings} from '../script'

describe('2353. Design a Food Rating System', (): void => {

    it('Test', (): void => {
        const foodRatings: FoodRatings = new FoodRatings(
            ["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"],
            ["korean", "japanese", "japanese", "greek", "japanese", "korean"],
            [9, 12, 8, 15, 14, 7]
        )

        expect(foodRatings.highestRated("korean"))
            .toBe("kimchi")

        expect(foodRatings.highestRated("japanese"))
            .toBe("ramen")

        foodRatings.changeRating("sushi", 16)
        expect(foodRatings.highestRated("japanese"))
            .toBe("sushi")

        foodRatings.changeRating("ramen", 16)
        expect(foodRatings.highestRated("japanese"))
            .toBe("ramen")
    })

    it('Test No Data', (): void => {
        const foodRatings: FoodRatings = new FoodRatings(
            ["kimchi"],
            ["korean"],
            [9]
        )

        expect(foodRatings.highestRated("korean"))
            .toBe("kimchi")

        expect(() => foodRatings.highestRated("japanese"))
            .toThrow("There is no food with this cuisine")
    })
})
