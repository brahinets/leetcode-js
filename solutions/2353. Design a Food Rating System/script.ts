export {FoodRatings}

class FoodRatings {
    private foodToCuisine: Map<string, string> = new Map<string, string>()
    private foodToRating: Map<string, number> = new Map<string, number>()
    private cuisineFoods: Map<string, Set<string>> = new Map<string, Set<string>>()

    constructor(foods: string[], cuisines: string[], ratings: number[]) {
        for (let i: number = 0; i < foods.length; i++) {
            this.foodToCuisine.set(foods[i], cuisines[i])
            this.foodToRating.set(foods[i], ratings[i])
        }

        for (let i: number = 0; i < foods.length; i++) {
            let cuisine: string = cuisines[i]

            if (!this.cuisineFoods.has(cuisine)) {
                this.cuisineFoods.set(cuisine, new Set<string>())
            }

            this.cuisineFoods.get(cuisine)!.add(foods[i])
        }
    }

    changeRating(food: string, newRating: number): void {
        this.foodToRating.set(food, newRating)
    }

    highestRated(cuisine: string): string {
        let bestFood: string = ""
        let bestRating: number = -1

        for (let food of this.cuisineFoods.get(cuisine)!) {
            let rating: number = this.foodToRating.get(food)!

            if (rating > bestRating || (rating === bestRating && food < bestFood)) {
                bestRating = rating
                bestFood = food
            }
        }

        return bestFood
    }
}
