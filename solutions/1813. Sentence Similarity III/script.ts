export {areSentencesSimilar}

function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
    const words1: string[] = sentence1.split(' ')
    const words2: string[] = sentence2.split(' ')

    if (words1.length < words2.length) {
        return areSentencesSimilar(sentence2, sentence1)
    }

    let i: number = 0
    while (i < words2.length && words1[i] === words2[i]) {
        i++
    }

    let j: number = words2.length - 1
    while (j >= 0 && words1[words1.length - words2.length + j] === words2[j]) {
        j--
    }

    return i > j
}
