export {lengthOfLongestSubstring}

function lengthOfLongestSubstring(s: string): number {
    const count:Map<string, number> = new Map<string, number>();

    let left:number = 0;
    let right:number = 0;
    let res:number = 0;

    while (right < s.length) {
        const notYet:boolean = count.get(s.charAt(right)) === undefined;

        if(notYet) {
            count.set(s.charAt(right), 1);
        } else {
            while (count.get(s.charAt(right)) !== undefined) {
                count.delete(s.charAt(left));
                left++;
            }
            count.set(s.charAt(right), 1);
        }

        res = Math.max(res, right - left + 1)

        right++;
    }

    return res;
}
