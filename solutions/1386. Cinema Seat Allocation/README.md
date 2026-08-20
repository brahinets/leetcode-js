# 1386. Cinema Seat Allocation

## Medium

A cinema has `n` rows of seats, numbered `1` to `n`, and there are ten seats in each row, labelled from `1` to `10`.

Given the array `reservedSeats` containing the numbers of seats already reserved, for example,
`reservedSeats[i] = [3,8]` means the seat located in row `3` and labelled `8` is already reserved.

Return *the maximum number of four-person groups you can assign on the cinema seats*. A four-person group occupies
four adjacent seats in one single row. Seats across an aisle (such as `[3,3]` and `[3,4]`) are not considered to be
adjacent, but there is an exceptional case on which an aisle split a four-person group, in that case, the aisle
split a four-person group in the middle, but this four-person group can still be considered as a single group of
four unified seats. Therefore, the possible positions for a four-person group are seats `2` to `5`, seats `4` to
`7`, and seats `6` to `9`.

### Constraints

- `1 <= n <= 10^9`
- `1 <= reservedSeats.length <= min(10 * n, 10^4)`
- `reservedSeats[i].length == 2`
- `1 <= row_i <= n`
- `1 <= seat_i <= 10`
- It is guaranteed that `reservedSeats` contains unique values.
