export {isCircularSentence}

function isCircularSentence(sentence: string): boolean {
    const words: string[] = sentence.split(' ')

    for (let i: number = 0; i < words.length; i++) {
        let current: string = words[i]
        let previous: string = i === 0 ? words[words.length - 1] : words[i - 1]

        if (current[0] !== previous[previous.length - 1]) {
            return false
        }
    }

    return true
}
