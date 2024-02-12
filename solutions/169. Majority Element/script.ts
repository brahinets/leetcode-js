import {count} from "../../common/array-utils"

export {majorityElement}

function majorityElement(nums: number[]): number {
    return [...count(nums).entries()]
        .find(([, cnt]: [number, number]): boolean => isMajor(cnt, nums))![0]
}

function isMajor(count: number, nums: number[]): boolean {
    return count > nums.length / 2
}
