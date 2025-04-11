export {countSymmetricIntegers}

function countSymmetricIntegers(low: number, high: number): number {
    let count = 0

    for (let num: number = low; num <= high; num++) {
        let str: string = num.toString()

        if (str.length % 2 !== 0) {
            continue
        }

        let half: number = str.length / 2
        let leftSum: number = 0
        let rightSum: number = 0

        for (let i: number = 0; i < half; i++) {
            leftSum += parseInt(str[i])
        }

        for (let i: number = half; i < str.length; i++) {
            rightSum += parseInt(str[i])
        }

        if (leftSum === rightSum) {
            count++
        }
    }

    return count
}
