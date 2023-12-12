export {longestCommonPrefix}

function longestCommonPrefix(strs: string[]): string {
    let prefix: string = "";

    if (strs.length === 0) {
        return prefix;
    }

    strs = strs.toSorted((a: string, b: string): number => a.length - b.length);
    const minLength: number = strs[0].length;

    for (let shift: number = 0; shift < minLength; shift++) {
        const chars: Set<string> = new Set<string>();

        for (const s of strs) {
            chars.add(s.charAt(shift))
        }

        const allLettersTheSame: boolean = chars.size === 1;

        if (allLettersTheSame) {
            const [char] = chars;
            prefix += char;
        } else {
            break;
        }
    }

    return prefix;
}
