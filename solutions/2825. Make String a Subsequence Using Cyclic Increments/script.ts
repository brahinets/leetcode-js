export {canMakeSubsequence}

function canMakeSubsequence(str1: string, str2: string): boolean {
    let str2Index: number = 0
    const lengthStr1: number = str1.length, lengthStr2 = str2.length

    for (let str1Index: number = 0; str1Index < lengthStr1 && str2Index < lengthStr2; ++str1Index) {
        if (match(str1, str1Index, str2, str2Index)) {
            str2Index++
        }
    }

    return str2Index === lengthStr2
}

function match(str1: string, str1Index: number, str2: string, str2Index: number): boolean {
    return str1.charAt(str1Index) === str2.charAt(str2Index) ||
        (str1.charCodeAt(str1Index) + 1 === str2.charCodeAt(str2Index)) ||
        (str1.charCodeAt(str1Index) - 25 === str2.charCodeAt(str2Index))
}
