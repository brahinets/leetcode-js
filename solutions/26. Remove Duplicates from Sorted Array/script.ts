export {removeDuplicates}

function removeDuplicates(nums: number[]): number {
    const unique: Set<number> = new Set(nums);

    nums.splice(0);
    nums.push(...unique);

    return unique.size;
}
