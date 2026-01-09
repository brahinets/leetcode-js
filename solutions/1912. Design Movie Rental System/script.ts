export {MovieRentingSystem}

const movieComparator: (a: number[], b: number[]) => number =
    (a: number[], b: number[]): number => a[2] - b[2] || a[0] - b[0] || a[1] - b[1]

type ShopMovieKey = number;

class MovieRentingSystem {
    private readonly availableMoviesById: Map<number, number[][]> = new Map()
    private readonly moviePriceByKey: Map<ShopMovieKey, number> = new Map()
    private readonly rentedMovies: Set<ShopMovieKey> = new Set()

    constructor(shopCount: number, movieEntries: number[][]) {
        for (const [shopId, movieId, price] of movieEntries) {
            let shopMovieEntries: number[][] | undefined = this.availableMoviesById.get(movieId)

            if (!shopMovieEntries) {
                shopMovieEntries = []
                this.availableMoviesById.set(movieId, shopMovieEntries)
            }

            shopMovieEntries.push([shopId, movieId, price])
            this.moviePriceByKey.set(createShopMovieKey(shopId, movieId), price)
        }

        for (const shopMovieEntries of this.availableMoviesById.values()) {
            shopMovieEntries.sort(movieComparator)
        }
    }

    search(movieId: number): number[] {
        const shopMovieEntries: number[][] | undefined = this.availableMoviesById.get(movieId)
        if (!shopMovieEntries) {
            return []
        }

        const availableShops: number[] = []
        for (const [shopId, movieId] of shopMovieEntries) {
            if (this.rentedMovies.has(createShopMovieKey(shopId, movieId))) {
                continue
            }

            if (availableShops.push(shopId) === 5) {
                break
            }
        }

        return availableShops
    }

    rent(shopId: number, movieId: number): void {
        this.rentedMovies.add(createShopMovieKey(shopId, movieId))
    }

    drop(shopId: number, movieId: number): void {
        this.rentedMovies.delete(createShopMovieKey(shopId, movieId))
    }

    report(): number[][] {
        const rentedEntries: number[][] = []
        for (const key of this.rentedMovies) {
            const [shopId, movieId] = decodeShopMovieKey(key)

            rentedEntries.push([shopId, movieId, this.moviePriceByKey.get(key)!])
        }

        return rentedEntries
            .sort(movieComparator)
            .slice(0, 5)
            .map(([shopId, movieId]: number[]): number[] => [shopId, movieId])
    }
}

function decodeShopMovieKey(key: ShopMovieKey): number[] {
    return [(key / 1e5) | 0, key % 1e5]
}

function createShopMovieKey(shopId: number, movieId: number): ShopMovieKey {
    return shopId * 1e5 + movieId
}
