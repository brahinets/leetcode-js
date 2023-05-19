function strStr(haystack: string, needle: string): number {
    for (let i: number = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }

    return -1;
}