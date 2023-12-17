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

    private getHighestRatedFood(foodsByCuisine: string[]): string {
        const foods: Food[] = foodsByCuisine
            .map((foodName: string): Food => new Food(foodName, this.foodCuisine.get(foodName)!, this.foodRating.get(foodName)!))
            .sort((a: Food, b: Food): number => {
                if (a.rating > b.rating) {
                    return -1
                } else if (a.rating < b.rating) {
                    return 1
                } else {
                    return a.name.localeCompare(b.name)
                }
            })

        return foods[0].name
    }
}

class Food {
    name: string
    cuisine: string
    rating: number

    constructor(name: string, cuisine: string, rating: number) {
        this.name = name
        this.cuisine = cuisine
        this.rating = rating
    }
}
