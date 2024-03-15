# 1845. Seat Reservation Manager

## Medium

Design a system that manages the reservation state of `n` seats that are numbered from `1` to `n`.

Implement the `SeatManager` class:

- `SeatManager(int n)` Initializes a SeatManager object that will manage `n` seats numbered from `1` to `n`. All seats
  are initially available.
- `int reserve()` Fetches the smallest-numbered unreserved seat, reserves it, and returns its number.
- `void unreserve(int seatNumber)` Unreserves the seat with the given seatNumber.

### Constraints:

- `1 <= n <= 10^5`
- `1 <= seatNumber <= n`
- For each call to `reserve`, it is guaranteed that there will be at least one unreserved seat.
- For each call to `unreserve`, it is guaranteed that `seatNumber` will be reserved.
- At most `10^5` calls in total will be made to reserve and `unreserve`.
