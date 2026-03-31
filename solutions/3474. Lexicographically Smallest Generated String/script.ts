import { arrayOf } from "../../common/array-factories"

export { generateString }

function generateString(str1: string, str2: string): string {
    const n: number = str1.length
    const m: number = str2.length
    const length: number = n + m - 1
    const wordCharacters: string[] = arrayOf('a', length)
    const isLocked: boolean[] = arrayOf(false, length)

    for (let i: number = 0; i < n; i++) {
        if (str1[i] === 'T') {
            for (let j: number = 0; j < m; j++) {
                const position: number = i + j

                if (isLocked[position] && wordCharacters[position] !== str2[j]) {
                    return ''
                }

                wordCharacters[position] = str2[j]

                isLocked[position] = true
            }
        }
    }

    for (let i: number = 0; i < n; i++) {
        if (str1[i] === 'F') {
            let windowMatchesStr2: boolean = true

            for (let j: number = 0; j < m; j++) {
                if (wordCharacters[i + j] !== str2[j]) {
                    windowMatchesStr2 = false

                    break
                }
            }

            if (windowMatchesStr2) {
                let rightmostUnlockedOffset: number = -1

                for (let j: number = m - 1; j >= 0; j--) {
                    if (!isLocked[i + j]) {
                        rightmostUnlockedOffset = j

                        break
                    }
                }

                if (rightmostUnlockedOffset === -1) {
                    return ''
                }

                const position: number = i + rightmostUnlockedOffset
                wordCharacters[position] = String.fromCharCode(
                    wordCharacters[position].charCodeAt(0) + 1
                )
            }
        }
    }

    return wordCharacters.join('')
}
