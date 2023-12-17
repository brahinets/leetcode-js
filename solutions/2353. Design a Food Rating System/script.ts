export {FoodRatings}

class FoodRatings {
    private readonly foods: string[]
    private readonly cuisines: string[]
    private readonly ratings: number[]

    constructor(foods: string[], cuisines: string[], ratings: number[]) {
        this.foods = foods
        this.cuisines = cuisines
        this.ratings = ratings
    }

    changeRating(food: string, newRating: number): void {
        this.ratings[this.foods.indexOf(food)] = newRating
    }

    highestRated(cuisine: string): string {
        let maxRating: number = -1
        let maxRatingFoodIndex: number = -1

        for (let index: number = 0; index < this.cuisines.length; index++) {
            const food: string = this.foods[index]

            if (this.cuisines[index] !== cuisine) {
                continue
            }

            if (this.ratings[index] > maxRating) {
                maxRating = this.ratings[index]
                maxRatingFoodIndex = index
            } else if (this.ratings[index] === maxRating) {
                if (food < this.foods[maxRatingFoodIndex]) {
                    maxRatingFoodIndex = index
                }
            }
        }

        if (maxRatingFoodIndex === -1) {
            throw new Error('There is no food with this cuisine')
        }

        return this.foods[maxRatingFoodIndex]
    }
}
