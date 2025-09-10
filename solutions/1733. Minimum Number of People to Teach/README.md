# 1733. Minimum Number of People to Teach

## Medium

On a social network consisting of `m` users and some friendships between users, two users can communicate with each
other if they know a common language. You are given an integer `n`, an array languages, and an array `friendships`
where: There are `n` languages numbered `1` through `n`, `languages[i]` is the set of languages the `ith` user knows,
and `friendships[i] = [ui, vi]` denotes a friendship between the users `ui` and `vi`. You can choose one language and
teach it to some users so that all friends can communicate with each other. Return the minimum number of users you need
to teach. Note that friendships are not transitive, meaning if `x` is a friend of `y` and `y` is a friend of `z`, this
doesn't guarantee that `x` is a friend of `z`.

### Constraints:

- `2 <= n <= 500`
- `languages.length == m`
- `1 <= m <= 500`
- `1 <= languages[i].length <= n`
- `1 <= languages[i][j] <= n`
- `1 <= ui < vi <= languages.length`
- `1 <= friendships.length <= 500`
- All tuples (ui, vi) are unique
- `languages[i] contains only unique values
