export {findDifferentBinaryString}

function findDifferentBinaryString(nums: string[]): string {
    nums.sort()

    let num: number = 0
    for (let i: number = 0; i < nums.length; i++) {
        if (parseInt(nums[i], 2) === num) {
            num++
        }
    }

    return num.toString(2).padStart(nums[0].length, '0')
}
