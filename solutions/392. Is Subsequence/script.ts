export const isSubsequence = (s: string, t: string): boolean => {
    let matched: number = 0;
    let i: number = 0;

    for (const letter of s) {
        while (i < t.length) {
            const match: boolean = t[i] === letter;

            i += 1;

            if (match) {
                matched++;
                break;
            }
        }

    }

    return matched === s.length;
}
