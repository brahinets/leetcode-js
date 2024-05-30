# 1442. Count Triplets That Can Form Two Arrays of Equal XOR

## Medium

Given an array of integers `arr`. We want to select three indices `i`, `j` and `k`
where `(0 <= i < j <= k < arr.length)`. Let's define a and b as follows:

- `a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]`
- `b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]`

Note that `^` denotes the bitwise-xor operation. Return the number of triplets (`i`, `j` and `k`) Where `a == b`.

### Constraints:

- `1 <= arr.length <= 300`
- `1 <= arr[i] <= 10^8`
