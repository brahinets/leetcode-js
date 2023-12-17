export {FoodRatings}

class FoodRatings {
    private readonly data: Food[]


    constructor(foods: string[], cuisines: string[], ratings: number[]) {
        this.data = foods.map((food: string, index: number): Food => new Food(food, cuisines[index], ratings[index]))
    }

    changeRating(food: string, newRating: number): void {
        this.data
            .filter((f: Food): boolean => f.name === food)
            .forEach((f: Food): void => {
                f.rating = newRating
            })
    }

    highestRated(cuisine: string): string {
        return this.data
            .filter((food: Food): boolean => food.cuisine === cuisine)
            .sort((a: Food, b: Food): number => {
                if (a.rating > b.rating) {
                    return -1
                } else if (a.rating < b.rating) {
                    return 1
                } else {
                    return a.name.localeCompare(b.name)
                }
            })[0].name
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
