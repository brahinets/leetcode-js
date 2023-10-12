export {TimeMap}

class TimeMap {
    private readonly data: Map<string, Array<string>>

    constructor() {
        this.data = new Map<string, Array<string>>()
    }

    set(key: string, value: string, timestamp: number): void {
        const values: string[] = this.data.get(key) ?? []
        values[timestamp] = value

        this.data.set(key, values)
    }

    get(key: string, timestamp: number): string {
        const values: string[] = this.data.get(key) ?? []

        for (let i: number = Math.min(timestamp, values.length); i >= 0; i--) {
            if (values[i] !== undefined) {
                return values[i]
            }
        }

        return ""
    }
}
