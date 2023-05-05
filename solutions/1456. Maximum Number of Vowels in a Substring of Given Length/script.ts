export {maxVowels}

const VOWELS: string[] = ['a', 'e', 'i', 'o', 'u'];

function isVowel(letter: string): boolean {
    return VOWELS.includes(letter);
}

function maxVowels(s: string, k: number): number {
    let max: number = 0;
    let count: number = 0;

    for (let i: number = 0; i < k; i++) {
        if (isVowel(s[i])) {
            count++;
        }
    }
    max = count;

    for (let i: number = k; i < s.length; i++) {
        if (isVowel(s[i - k])) {
            count--;
        }

        if (isVowel(s[i])) {
            count++;
        }

        if (count > max) {
            max = count;
        }
    }

    return max;
}