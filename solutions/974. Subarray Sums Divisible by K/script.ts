export {subarraysDivByK}

function subarraysDivByK(nums: number[], k: number): number {
    const prefixMods: Map<number, number> = new Map<number, number>([[0, 1]])

    let count: number = 0
    let prefixMod: number = 0
    for (let i = 0; i < nums.length; i++) {
        prefixMod = (prefixMod + nums[i] % k + k) % k

        const prefix: number = prefixMods.get(prefixMod) ?? 0
        count += prefix

        prefixMods.set(prefixMod, prefix + 1)
    }

    return count
}
