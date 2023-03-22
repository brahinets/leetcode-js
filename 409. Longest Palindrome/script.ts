export function longestPalindrome(s: string): number {
    const counts: Counter[] = countLetters(s);
    const pairs: number = counts.reduce((sum: number, counter: Counter) => {
        return sum + Math.floor(counter.count / 2);
    }, 0);

    const hasNonPairedLetter: boolean = s.length > pairs * 2;

    return pairs * 2 + (hasNonPairedLetter ? 1 : 0);
}

function countLetters(s: string): Counter[] {
    const counts: Counter[] = [];

    for (let letter of s) {
        const counter: Counter | undefined = counts
            .find((c: Counter): boolean => c.letter === letter);

        if (counter) {
            counter.increment();
        } else {
            const newCounter: Counter = new Counter(letter);
            newCounter.increment()
            counts.push(newCounter)
        }
    }

    return counts;
}

class Counter {
    letter: string;
    count: number;

    constructor(letter: string) {
        this.letter = letter;
        this.count = 0;
    }

    increment(): void {
        this.count += 1;
    }
}