export {canConstruct}

function canConstruct(ransomNote: string, magazine: string): boolean {
    const presentLetters: string[] = magazine.split("");
    const requiredLetters: string[] = ransomNote.split("");

    for (let i: number = 0; i < requiredLetters.length; i++) {
        const requiredLetter: string = requiredLetters[i];
        const requiredLetterIndex: number = presentLetters.indexOf(requiredLetter);

        if (requiredLetterIndex !== -1) {
            presentLetters.splice(requiredLetterIndex, 1)
        } else {
            return false;
        }
    }

    return true;
}