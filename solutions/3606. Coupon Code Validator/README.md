# 3606. Coupon Code Validator

## Easy

You are given three arrays of length `n` that describe the properties of `n` coupons: `code`, `businessLine`, and
`isActive`. The ith coupon has:

- `code[i]`: a string representing the coupon identifier.
- `businessLine[i]`: a string denoting the business category of the coupon.
- `isActive[i]`: a boolean indicating whether the coupon is currently active.

A coupon is considered valid if all of the following conditions hold:

- `code[i]` is non-empty and consists only of alphanumeric characters (`a-z`, `A-Z`, `0-9`) and underscores (`_`).
- `businessLine[i]` is one of the following four categories: `electronics`, `grocery`, `pharmacy`, `restaurant`.
- `isActive[i]` is `true`.

Return an array of the codes of all valid coupons, sorted first by their businessLine in the order: `electronics`,
`grocery`, `pharmacy`, `restaurant`, and then by code in lexicographical (ascending) order within each category.

### Constraints:

- `n == code.length == businessLine.length == isActive.length`
- `1 <= n <= 100`
- `0 <= code[i].length, businessLine[i].length <= 100`
- `code[i]` and `businessLine[i]` consist of printable ASCII characters.
- `isActive[i]` is either `true` or `false`
