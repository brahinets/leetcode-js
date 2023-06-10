export {lengthOfLongestSubstring}

function lengthOfLongestSubstring(s: string): number {
    const count: Map<string, number> = new Map<string, number>();

    let left: number = 0;
    let right: number = 0;
    let res: number = 0;

    while (right < s.length) {
        const rightBoundChar:string = s.charAt(right);

        count.set(rightBoundChar, (count.get(rightBoundChar) ?? 0) + 1);

        while ((count.get(rightBoundChar) ?? 0) > 1) {
            const leftBoundChar:string = s.charAt(left);
            count.set(leftBoundChar, (count.get(leftBoundChar) ?? 1) - 1);
            left++;
        }

        res = Math.max(res, right - left + 1)

        right++;
    }

    return res;
}
