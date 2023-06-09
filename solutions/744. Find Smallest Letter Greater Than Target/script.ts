export {nextGreatestLetter}

function nextGreatestLetter(letters: string[], target: string): string {
    let i:number = 0;

    while (i < letters.length && letters[i].charCodeAt(0) <= target.charCodeAt(0)) {
        i++;
    }

    if(i === letters.length) {
        return letters[0];
    } else {
        return letters[i];
    }
}
