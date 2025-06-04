export {answerString}

function answerString(word: string, numFriends: number): string {
    if (numFriends === 1) {
        return word
    }

    let lexicographicallyLargestString: string = ""
    for (let i: number = 0; i < word.length; i++) {
        const split: string = word.substring(i, Math.min(i + word.length - numFriends + 1, word.length))

        if (split > lexicographicallyLargestString) {
            lexicographicallyLargestString = split
        }
    }

    return lexicographicallyLargestString
}
