export {numOfUnplacedFruits}

function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
    let count: number = 0

    for (const fruit of fruits) {
        let unset: number = 1

        for (let i: number = 0; i < baskets.length; i++) {
            if (fruit <= baskets[i]) {
                baskets[i] = 0
                unset = 0

                break
            }
        }

        count += unset
    }

    return count
}
