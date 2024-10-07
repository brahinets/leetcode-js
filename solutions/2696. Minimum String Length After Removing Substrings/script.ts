export {minLength}

function minLength(s: string): number {
    while (s.includes("AB") || s.includes("CD")) {
        s = s.replace("AB", "").replace("CD", "")
    }

    return s.length
}
