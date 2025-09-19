# 3484. Design Spreadsheet

## Medium

A spreadsheet is a grid with `26` columns (labeled from `A` to `Z`) and a given number of `rows`. Each cell in the
spreadsheet can hold an integer value between `0` and `10^5`.

Implement the `Spreadsheet` class:

- `Spreadsheet(int rows)` Initializes a spreadsheet with 26 columns (labeled `A` to `Z`) and the specified number of
  rows. All cells are initially set to 0.
- `void setCell(String cell, int value)` Sets the value of the specified cell. The cell reference is provided in the
  format `AX` (e.g., `A1`, `B10`), where the letter represents the column (from `A` to `Z`) and the number represents a
  1-indexed row.
- `void resetCell(String cell)` Resets the specified cell to 0.
- `int getValue(String formula)` Evaluates a formula of the form `=X+Y`, where `X` and `Y` are either cell references or
  non-negative integers, and returns the computed sum.

**Note:** If getValue references a cell that has not been explicitly set using `setCell`, its value is considered `0`.

### Constraints:

- `1 <= rows <= 10^3`
- `0 <= value <= 10^5`
- The formula is always in the format `=X+Y`, where `X` and `Y` are either valid cell references or non-negative
  integers with values less than or equal to `10^5`.
- Each cell reference consists of a capital letter from `A` to `Z` followed by a row number between `1` and `rows`.
- At most `10^4` calls will be made in total to `setCell`, `resetCell`, and `getValue`.
