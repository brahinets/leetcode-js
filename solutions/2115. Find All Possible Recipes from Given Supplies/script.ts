import {arrayOfZeros} from "../../common/array-factories"

export {findAllRecipes}

function findAllRecipes(
    recipes: string[],
    ingredients: string[][],
    supplies: string[]
): string[] {
    const available: Set<string> = new Set<string>(supplies)
    const recipeQueue: number[] = arrayOfZeros(recipes.length).map((_: number, i: number): number => i)

    const createdRecipes: string[] = []
    let lastSize: number = -1

    while (available.size > lastSize) {
        lastSize = available.size
        let queueSize: number = recipeQueue.length

        while (queueSize-- > 0) {
            const recipeIdx: number = recipeQueue.shift()!
            let canCreate: boolean = true

            for (const ingredient of ingredients[recipeIdx]) {
                if (!available.has(ingredient)) {
                    canCreate = false
                    break
                }
            }

            if (!canCreate) {
                recipeQueue.push(recipeIdx)
            } else {
                available.add(recipes[recipeIdx])
                createdRecipes.push(recipes[recipeIdx])
            }
        }
    }

    return createdRecipes
}
