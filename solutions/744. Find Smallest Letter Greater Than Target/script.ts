export {nextGreatestLetter}

function nextGreatestLetter(letters: string[], target: string): string {
    let i: number = 0;

    while (i < letters.length) {
        if (letters[i] > target) {
            return letters[i];
        }

        i++;
    }

    return letters[0];
}
