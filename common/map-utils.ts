export {mapsAreEqual}

function mapsAreEqual<K, V>(first: Map<K, V>, second: Map<K, V>): boolean {
    return first.size === second.size
        && Array.from(first.keys()).every((key: K): boolean => first.get(key) === second.get(key))
}
