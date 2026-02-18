export { hasAlternatingBits }

function hasAlternatingBits(n: number): boolean {
    const mask: number = n ^ (n >> 1)
    return (mask & (mask + 1)) === 0
}
