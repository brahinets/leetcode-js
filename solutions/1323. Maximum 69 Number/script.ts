export {maximum69Number}

function maximum69Number (num: number): number {
    const numStr: string = num.toString()
    const index: number = numStr.indexOf("6")

    if (index === -1) {
        return num
    }

    return parseInt(numStr.substring(0, index) + "9" + numStr.substring(index + 1), 10)
}
