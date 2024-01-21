import {last} from "../../common/array-utils";

export {rob}

function rob(house: number[]): number {
    const maxForHouse: number[] = []

    for (let i: number = 0; i < house.length; i++) {
        maxForHouse[i] = Math.max(
            (maxForHouse[i - 1] ?? 0),
            (maxForHouse[i - 2] ?? 0) + house[i]
        )
    }

    return last(maxForHouse) ?? 0
}
