# 2075. Decode the Slanted Ciphertext

## Medium

A string `originalText` is encoded using a **slanted transposition cipher** into `encodedText` using a matrix with a fixed number of rows `rows`. The original text is placed diagonally from top-left to bottom-right. Empty cells are filled with spaces. The encoded text is formed by reading the matrix row-by-row.

Given `encodedText` and `rows`, return `originalText` (without trailing spaces).

### Constraints:

- `0 <= encodedText.length <= 10^6`
- `encodedText` consists of lowercase English letters and `' '`
- `encodedText.length % rows == 0`
- `1 <= rows <= 1000`
