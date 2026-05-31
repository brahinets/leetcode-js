# 2126. Destroying Asteroids

## Medium

You are given an integer `mass`, which represents the original mass of a planet. You are further given an integer array
`asteroids`, where `asteroids[i]` is the mass of the `i`th asteroid. You can arrange for the planet to meet the
asteroids in any arbitrary order. If the planet's mass is greater than or equal to the mass of the asteroid, the planet
absorbs the asteroid and increases its mass by it. Otherwise, the planet is destroyed. Return `true` if all asteroids
can be destroyed. Otherwise, return `false`.

### Constraints:

- `1 <= mass <= 10^5`
- `1 <= asteroids.length <= 10^5`
- `1 <= asteroids[i] <= 10^5`
