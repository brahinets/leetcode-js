export {lengthOfLongestSubstring}

function lengthOfLongestSubstring(s: string): number {
    let max: number = 0;

    for (let i: number = s.length - 1; i >= 0; i--) {
        for (let j: number = i; j < s.length; j++) {
            const sub: string = s.substring(i, j + 1);
            const uniques: number = new Set<string>(sub.split("")).size;

            if (uniques === sub.length && uniques > max) {
                max = uniques;
            }
        }
    }

    return max;
}