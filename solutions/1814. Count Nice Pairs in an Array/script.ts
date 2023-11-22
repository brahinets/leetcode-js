import {reverse} from "../7. Reverse Integer/script";
import {count} from "../../common/array-utils";

export {countNicePairs}

const MOD: number = 10 ** 9 + 7

function countNicePairs(nums: number[]): number {
    const data: number[] = []
    for (let i: number = 0; i < nums.length; i++) {
        data.push(nums[i] - reverse(nums[i]))
    }

    let nicePairs: number = 0
    const counts: Map<number, number> = count(data);
    for (const [key, value] of counts) {
        nicePairs = (nicePairs + value * (value - 1) / 2) % MOD
    }

    return nicePairs
}
