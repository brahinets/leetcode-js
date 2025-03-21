import {findAllRecipes} from '../script'

describe('2115. Find All Possible Recipes from Given Supplies', (): void => {
    it('Create One', (): void => {
        expect(findAllRecipes(["bread"], [["yeast", "flour"]], ["yeast", "flour", "corn"]))
            .toEqual(["bread"])
    })

    it('Create Two', (): void => {
        expect(findAllRecipes(["bread", "sandwich"], [["yeast", "flour"], ["bread", "meat"]], ["yeast", "flour", "meat"]))
            .toEqual(["bread", "sandwich"])
    })

    it('Create Many', (): void => {
        expect(findAllRecipes(["bread", "sandwich", "burger"], [["yeast", "flour"], ["bread", "meat"], ["sandwich", "meat", "bread"]], ["yeast", "flour", "meat"]))
            .toEqual(["bread", "sandwich", "burger"])
    })
})
