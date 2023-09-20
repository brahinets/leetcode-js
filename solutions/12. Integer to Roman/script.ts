export {intToRoman}

const INTEGERS: Map<number, string> = new Map<number, string>([
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"]
])

function intToRoman(num: number): string {
    let result: string = ""

    while (num > 0) {
        let roman: string = ""
        let max: number = 0
        for (const [i, r] of INTEGERS) {
            if (i <= num) {
                roman = r
                max = i
            }
        }

        while (num >= max) {
            result += roman
            num -= max
        }
    }

    return result
}
