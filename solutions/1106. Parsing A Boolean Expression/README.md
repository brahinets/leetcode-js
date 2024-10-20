# 1106. Parsing A Boolean Expression

## Hard

A boolean expression is an expression that evaluates to either `true` or `false`. It can be in one of the following
shapes:

- `t` that evaluates to `true`.
- `f` that evaluates to `false`.
- `!(subExpr)` that evaluates to the logical NOT of the inner expression subExpr.
- `&(subExpr1, subExpr2, ..., subExprn)` that evaluates to the logical AND of the inner expressions
  `subExpr1, subExpr2, ..., subExprn` where `n >= 1`.
- `|(subExpr1, subExpr2, ..., subExprn)` that evaluates to the logical OR of the inner expressions
  `subExpr1, subExpr2, ..., subExprn` where `n >= 1`.

Given a string expression that represents a boolean expression, return the evaluation of that expression. It is
guaranteed that the given expression is valid and follows the given rules.

### Constraints:

- `1 <= expression.length <= 2 * 10^4`
- `expression[i]` is one following characters: `(`, `)`, `&`, `|`, `!`, `t`, `f`, and `,`
