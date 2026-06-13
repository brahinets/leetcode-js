# Weighted Word Mapping

## Easy

You are given an array of strings `words`, where each string represents a word containing lowercase English letters. You are also given an integer array `weights` of length 26, where `weights[i]` represents the weight of the `i`th lowercase English letter (0-indexed, so `weights[0]` is the weight of `'a'`, `weights[1]` is the weight of `'b'`, etc.).

The **weight** of a word is defined as the sum of the weights of its characters.

For each word, take its weight modulo 26 and map the result to a lowercase English letter using **reverse alphabetical order** (`0` -> `'z'`, `1` -> `'y'`, ..., `25` -> `'a'`).

Return a string formed by concatenating the mapped characters for all words in order.

## Constraints

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 10`
- `weights.length == 26`
- `1 <= weights[i] <= 100`
- `words[i]` consists of lowercase English letters.
