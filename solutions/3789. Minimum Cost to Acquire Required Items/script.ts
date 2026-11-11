export { minimumCost }

function minimumCost(
    cost1: number,
    cost2: number,
    costBoth: number,
    need1: number,
    need2: number
): number {
    const pairedRequirements: number = Math.min(need1, need2)
    const pairedUnitCost: number = Math.min(costBoth, cost1 + cost2)
    const remainingNeed1: number = need1 - pairedRequirements
    const remainingNeed2: number = need2 - pairedRequirements
    const type1UnitCost: number = Math.min(costBoth, cost1)
    const type2UnitCost: number = Math.min(costBoth, cost2)

    return (
        pairedRequirements * pairedUnitCost +
        remainingNeed1 * type1UnitCost +
        remainingNeed2 * type2UnitCost
    )
}
