import {count} from '../../common/array-utils'

export {topKFrequent}

function topKFrequent(nums: number[], k: number): number[] {
    const counting: Map<number, number> = count(nums);
    nums = sort(nums, counting);

    const result: number[] = [];
    let i: number = 0;
    while (result.length < k && i < nums.length) {
        const num: number = nums[nums.length - 1 - i];

        if (!arrayContains(result, num)) {
            result.push(num);
        }

        i++;
    }

    return result;
}

function arrayContains(nums: number[], targetNum: number): boolean {
    return nums.some((num: number): boolean => num === targetNum);
}

function sort(nums: number[], counting: Map<number, number>): number[] {
    const strings: number[] = [...nums];

    return strings.sort((s1: number, s2: number): number => {
        let counter: number = (counting.get(s1) || 0) - (counting.get(s2) || 0);

        if (counter !== 0) {
            return counter;
        }

        return 1;
    })
}