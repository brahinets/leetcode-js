function strStr(haystack: string, needle: string): number {
    let i: number = 0;

    while (i <= haystack.length - needle.length) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }

        i++;
    }

    return -1;
}