export {totalFruit}

function totalFruit(fruits: number[]): number {
    const basket: Record<number, number> = {}
    let left: number = 0
    let maxFruits: number = 0

    for (let right: number = 0; right < fruits.length; right++) {
        const fruit: number = fruits[right]
        basket[fruit] = (basket[fruit] || 0) + 1

        while (Object.keys(basket).length > 2) {
            const leftFruit: number = fruits[left]

            basket[leftFruit] -= 1

            if (basket[leftFruit] === 0) {
                delete basket[leftFruit]
            }

            left += 1
        }

        maxFruits = Math.max(maxFruits, right - left + 1)
    }

    return maxFruits
}
