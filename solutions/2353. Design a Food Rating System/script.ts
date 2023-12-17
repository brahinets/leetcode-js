export {FoodRatings}

class FoodRatings {
    private readonly foodRating: Map<string, number> = new Map<string, number>()
    private readonly foodCuisine: Map<string, string> = new Map<string, string>()

    constructor(foods: string[], cuisines: string[], ratings: number[]) {
        this.foodRating = new Map<string, number>()
        this.foodCuisine = new Map<string, string>()

        for (let i: number = 0; i < foods.length; i++) {
            this.foodRating.set(foods[i], ratings[i])
            this.foodCuisine.set(foods[i], cuisines[i])
        }
    }

    changeRating(food: string, newRating: number): void {
        this.foodRating.set(food, newRating)
    }

    highestRated(cuisine: string): string {
        return this.getHighestRatedFood(this.getFoodsByCuisine(cuisine))
    }

    private getFoodsByCuisine(cuisine: string): string[] {
        const foods: string[] = []

        this.foodCuisine.forEach((c: string, food: string): void => {
            if (c === cuisine) {
                foods.push(food)
            }
        })

        return foods
    }

    private getHighestRatedFood(foods: string[]): string {
        let maxRating: number = -1
        let maxRatingIndex: number = -1

        for (let i: number = 0; i < foods.length; i++) {
            const rating: number = this.foodRating.get(foods[i])!
            if (rating === maxRating) {
                if (foods[i].localeCompare(foods[maxRatingIndex]) < 0) {
                    maxRatingIndex = i
                }
            } else if (rating > maxRating) {
                maxRating = rating
                maxRatingIndex = i
            }
        }

        return foods[maxRatingIndex]
    }
}
