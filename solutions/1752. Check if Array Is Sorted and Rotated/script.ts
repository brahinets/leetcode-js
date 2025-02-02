export {check}

function check(nums: number[]): boolean {
    const sortedNums: number[] = [...nums].sort((a: number, b: number): number => a - b)

    for (let rotationOffset: number = 0; rotationOffset < nums.length; rotationOffset++) {
        let isMatch: boolean = true

        for (let index: number = 0; index < nums.length; index++) {
            if (nums[(rotationOffset + index) % nums.length] != sortedNums[index]) {
                isMatch = false
                break
            }
        }

        if (isMatch) {
            return true
        }
    }

    return false
}
