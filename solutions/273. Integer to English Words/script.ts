export {numberToWords}

function numberToWords(num: number): string {
    for (const nw of NUMBER_TO_STRING) {
        if (num >= nw.value) {
            const unit: string = nw.word
            const prefix: string = num >= 100 ? numberToWords(Math.floor(num / nw.value)) + " " : ""
            const suffix: string = (num === 0 || num % nw.value === 0) ? "" : " " + numberToWords(num % nw.value)

            return (prefix + unit + suffix).trim()
        }
    }

    throw new Error("Unsupported number: " + num)
}

class NumberWord {
    readonly value: number
    readonly word: string

    constructor(value: number, word: string) {
        this.value = value
        this.word = word
    }
}

const NUMBER_TO_STRING: NumberWord[] = [
    new NumberWord(1000000000, "Billion"),
    new NumberWord(1000000, "Million"),
    new NumberWord(1000, "Thousand"),
    new NumberWord(100, "Hundred"),
    new NumberWord(90, "Ninety"),
    new NumberWord(80, "Eighty"),
    new NumberWord(70, "Seventy"),
    new NumberWord(60, "Sixty"),
    new NumberWord(50, "Fifty"),
    new NumberWord(40, "Forty"),
    new NumberWord(30, "Thirty"),
    new NumberWord(20, "Twenty"),
    new NumberWord(19, "Nineteen"),
    new NumberWord(18, "Eighteen"),
    new NumberWord(17, "Seventeen"),
    new NumberWord(16, "Sixteen"),
    new NumberWord(15, "Fifteen"),
    new NumberWord(14, "Fourteen"),
    new NumberWord(13, "Thirteen"),
    new NumberWord(12, "Twelve"),
    new NumberWord(11, "Eleven"),
    new NumberWord(10, "Ten"),
    new NumberWord(9, "Nine"),
    new NumberWord(8, "Eight"),
    new NumberWord(7, "Seven"),
    new NumberWord(6, "Six"),
    new NumberWord(5, "Five"),
    new NumberWord(4, "Four"),
    new NumberWord(3, "Three"),
    new NumberWord(2, "Two"),
    new NumberWord(1, "One"),
    new NumberWord(0, "Zero")
]
