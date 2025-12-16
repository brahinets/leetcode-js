# 3562. Maximum Profit from Trading Stocks with Discounts

## Hard

You are given an integer `n`, representing the number of employees in a company. Each employee is assigned a unique ID
from `1` to `n`, and employee `1` is the CEO. You are given two 1-based integer arrays, `present` and `future`, each of
length `n`, where:

- `present[i]` represents the current price at which the `ith` employee can buy a stock today.
- `future[i]` represents the expected price at which the `ith` employee can sell the stock tomorrow.

The company's hierarchy is represented by a 2D integer array `hierarchy`, where `hierarchy[i] = [ui, vi]` means that
employee ґ is the direct boss of employee ґ.

Additionally, you have an integer `budget` representing the total funds available for investment.

However, the company has a discount policy: if an employee's direct boss purchases their own stock, then the employee
can buy their stock at half the original price (`floor(present[v] / 2)`).

Return the maximum profit that can be achieved without exceeding the given budget.

**Note:**

- You may buy each stock at most once.
- You cannot use any profit earned from future stock prices to fund additional investments and must buy only from
  budget.

### Constraints:

- `1 <= n <= 160`
- `present.length, future.length == n`
- `1 <= present[i], future[i] <= 50`
- `hierarchy.length == n - 1`
- `hierarchy[i] == [ui, vi]`
- `1 <= ui, vi <= n`
- `ui != vi`
- `1 <= budget <= 160`
- There are no duplicate edges.
- Employee 1 is the direct or indirect boss of every employee.
- The input graph `hierarchy` is guaranteed to have no cycles.
