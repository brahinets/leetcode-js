export {longestCommonPrefix}


function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    const cache: Set<number> = new Set<number>()
    let result: number = 0
    for (let num of arr1) {
        while (num > 0) {
            cache.add(num)
            num = Math.floor(num / 10)
        }
    }

    for (let num of arr2) {
        let current: number = `${num}`.length

        while (num > 0 && current > result) {
            if (cache.has(num)) {
                result = current
            }

            num = Math.floor(num / 10)
            current--
        }
    }

    return result
}
