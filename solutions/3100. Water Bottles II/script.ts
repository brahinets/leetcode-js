export {maxBottlesDrunk}

function maxBottlesDrunk(initialBottles: number, exchangeRequirement: number): number {
    const a: number = 1
    const b: number = 2 * exchangeRequirement - 3
    const c: number = -2 * initialBottles
    const discriminant: number = b * b - 4 * a * c
    const exchangeTimes: number = Math.ceil((-b + Math.sqrt(discriminant)) / (2 * a))

    return initialBottles + exchangeTimes - 1
}
