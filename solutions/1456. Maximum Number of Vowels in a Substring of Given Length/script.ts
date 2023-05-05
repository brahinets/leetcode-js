export {maxVowels}

const VOWELS: string[] = ['a', 'e', 'i', 'o', 'u'];

function isVowel(letter: string): boolean {
    return VOWELS.includes(letter);
}

function maxVowels(s: string, k: number): number {
    let max: number = 0;

    for (let i: number = 0; i <= s.length - k; i++) {
        const substring: string = s.substring(i, i + k);
        const count: number = substring.split("")
            .map((letter: string): number => isVowel(letter) ? 1 : 0)
            .reduce((count: number, elem: number): number => count + elem);

        if (count > max) {
            max = count;
        }
    }

    return max;
}