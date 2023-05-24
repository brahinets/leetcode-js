export {isPalindrome}

const isPalindrome = function (x: number): boolean {
    const str: string = String(x);
    const middle: number = str.length / 2;

    for (let i: number = 0; i < middle; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }

    return true;
}