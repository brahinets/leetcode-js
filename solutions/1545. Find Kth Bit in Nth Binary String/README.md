# 1545. Find Kth Bit in Nth Binary String

## Medium

Given two positive integers `n` and `k`, the binary string `Sn` is formed as follows:

- `S1 = "0"`
- `Si = Si - 1 + "1" + reverse(invert(Si - 1))` for `i > 1`

Where `+` denotes the concatenation operation, `reverse(x)` returns the reversed string `x`, and `invert(x)` inverts all
the bits in `x` (`0` changes to `1` and `1` changes to `0`). Return the `kth` bit in `Sn`. It is guaranteed that `k` is
valid for the given `n`.

### Constraints:

- `1 <= n <= 20`
- `1 <= k <= 2^n - 1`
