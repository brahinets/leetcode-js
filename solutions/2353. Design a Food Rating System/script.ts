import {PriorityQueue} from "../../common/PriorityQueue"

export {FoodRatings}

interface FoodInfo {
    name: string
    rating: number
}

class FoodRatings {
    private foodToCuisine: Map<string, string> = new Map<string, string>()
    private foodToRating: Map<string, number> = new Map<string, number>()
    private cuisineToFoods: Map<string, PriorityQueue<FoodInfo>> = new Map<string, PriorityQueue<FoodInfo>>()

    constructor(foods: string[], cuisines: string[], ratings: number[]) {
        for (let i: number = 0; i < foods.length; i++) {
            this.foodToCuisine.set(foods[i], cuisines[i])
            this.foodToRating.set(foods[i], ratings[i])
        }

        for (let i: number = 0; i < foods.length; i++) {
            const cuisine: string = cuisines[i]

            if (!this.cuisineToFoods.has(cuisine)) {
                this.cuisineToFoods.set(
                    cuisine,
                    new PriorityQueue<FoodInfo>((a: FoodInfo, b: FoodInfo): number => {
                        if (a.rating !== b.rating) return b.rating - a.rating
                        return a.name.localeCompare(b.name)
                    })
                )
            }

            this.cuisineToFoods.get(cuisine)!.enqueue({name: foods[i], rating: ratings[i]})
        }
    }

    changeRating(food: string, newRating: number): void {
        this.foodToRating.set(food, newRating)

        const cuisine: string = this.foodToCuisine.get(food)!

        this.cuisineToFoods.get(cuisine)!.enqueue({name: food, rating: newRating})
    }

    highestRated(cuisine: string): string {
        const pq: PriorityQueue<FoodInfo> | undefined = this.cuisineToFoods.get(cuisine)
        if (!pq) {
            throw new Error('There is no food with this cuisine')
        }

        while (true) {
            const top: FoodInfo = pq.peek()!
            if (this.foodToRating.get(top.name) === top.rating) {
                return top.name
            }

            pq.dequeue()
        }
    }
}
