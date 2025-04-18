export {countAndSay}

function countAndSay(n: number): string {
    let result: string = '1'

    for (let i: number = 1; i < n; i++) {
        let temp: string = ''
        let count: number = 1

        for (let j: number = 0; j < result.length; j++) {
            if (result[j] === result[j + 1]) {
                count++
            } else {
                temp += count + result[j]
                count = 1
            }
        }

        result = temp
    }

    return result
}
