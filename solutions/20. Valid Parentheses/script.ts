const getKeyByValue = (map: Map<string, string>, targetValue: string): string | null => {
    for (const [key, value] of map) {
        if (value === targetValue) {
            return key;
        }
    }

    return null;
}

const BRACES: Map<string, string> = new Map<string, string>([
    ["[", "]"],
    ["{", "}"],
    ["(", ")"]
]);

const isValid = function (s: string): boolean {
    const stack: string[] = [];

    for (const ch of s) {
        if (BRACES.has(ch)) {
            stack.push(ch);
        } else {
            const opening: string | null = getKeyByValue(BRACES, ch);

            if (opening) {
                let closed: string | null = opening;
                let opened: string | null = stack.pop() || null;

                if (opened !== closed) {
                    return false;
                }
            } else {
                throw new Error(`Unsupported character: ${ch}`);
            }
        }
    }

    return stack.length === 0;
}