# 1605. Find Valid Matrix Given Row and Column Sums

## Medium

You are given two arrays `rowSum` and `colSum` of non-negative integers where `rowSum[i]` is the sum of the elements in
the `ith` row and `colSum[j]` is the sum of the elements of the `jth` column of a 2D matrix. In other words, you do not
know the elements of the matrix, but you do know the sums of each row and column. Find any matrix of non-negative
integers of size `rowSum.length x colSum.length` that satisfies the `rowSum` and `colSum` requirements. Return a 2D
array representing any matrix that fulfills the requirements. It's guaranteed that at least one matrix that fulfills the
requirements exists.

### Constraints:

- `1 <= rowSum.length, colSum.length <= 500`
- `0 <= rowSum[i], colSum[i] <= 10^8`
- `sum(rowSum) == sum(colSum)`
