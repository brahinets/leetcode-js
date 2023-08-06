# 920. Number of Music Playlists

## Hard

Your music player contains `n` different songs. You want to listen to `goal` songs (not necessarily different) during
your trip. To avoid boredom, you will create a playlist so that:

- Every song is played at least once.
- A song can only be played again only if `k` other songs have been played.

- Given n, goal, and k, return the number of possible playlists that you can create. Since the answer can be very large,
  return it modulo `10^9 + 7`.

### Constraints:

`0 <= k < n <= goal <= 100`
