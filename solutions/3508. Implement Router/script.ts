export {Router}

interface Packet {
    source: number
    destination: number
    timestamp: number
}

interface Timestamps {
    startIndex: number
    timestamps: number[]
}

class Router {
    private static readonly THERE_ARE_NO_PACKETS: number[] = []
    private static readonly PACKETS_NOT_FOUND_FOR_GIVEN_TIMESTAMP_RANGE = 0
    private readonly memoryLimit: number
    private readonly packets: MyQueue<Packet>
    private readonly quickAccessPackets: Set<string>
    private readonly destinationToTimestamps: Map<number, Timestamps>

    constructor(memoryLimit: number) {
        this.memoryLimit = memoryLimit
        this.packets = new MyQueue<Packet>()
        this.quickAccessPackets = new Set<string>()
        this.destinationToTimestamps = new Map<number, Timestamps>()
    }

    private convertPacketToString(packet: Packet): string {
        return `${packet.source},${packet.destination},${packet.timestamp}`
    }

    addPacket(source: number, destination: number, timestamp: number): boolean {
        const packet = {source, destination, timestamp}
        const packetAsString = this.convertPacketToString(packet)
        if (this.quickAccessPackets.has(packetAsString)) {
            return false
        }
        if (this.packets.size() === this.memoryLimit) {
            const toRemove = this.packets.dequeue()!
            const toRemoveAsString = this.convertPacketToString(toRemove)
            this.quickAccessPackets.delete(toRemoveAsString)
            ++this.destinationToTimestamps.get(toRemove.destination)!.startIndex
        }
        this.packets.enqueue(packet)
        this.quickAccessPackets.add(packetAsString)
        if (!this.destinationToTimestamps.has(destination)) {
            this.destinationToTimestamps.set(destination, {startIndex: 0, timestamps: []})
        }
        this.destinationToTimestamps.get(destination)!.timestamps.push(timestamp)
        return true
    }

    forwardPacket(): number[] {
        if (this.packets.isEmpty()) {
            return Router.THERE_ARE_NO_PACKETS
        }

        const toRemove: Packet = this.packets.dequeue()!
        const toRemoveAsString: string = this.convertPacketToString(toRemove)

        this.quickAccessPackets.delete(toRemoveAsString)
        ++this.destinationToTimestamps.get(toRemove.destination)!.startIndex
        return [toRemove.source, toRemove.destination, toRemove.timestamp]
    }

    getCount(destination: number, startTime: number, endTime: number): number {
        if (!this.destinationToTimestamps.has(destination)) {
            return Router.PACKETS_NOT_FOUND_FOR_GIVEN_TIMESTAMP_RANGE
        }

        const timestamps = this.destinationToTimestamps.get(destination)!.timestamps

        let startIndex = this.destinationToTimestamps.get(destination)!.startIndex
        let endIndex = timestamps.length - 1
        if (
            startIndex > endIndex ||
            startIndex === timestamps.length ||
            timestamps[startIndex] > endTime ||
            timestamps[endIndex] < startTime
        ) {
            return Router.PACKETS_NOT_FOUND_FOR_GIVEN_TIMESTAMP_RANGE
        }

        while (startIndex < endIndex && timestamps[startIndex] < startTime) {
            ++startIndex
        }

        while (endIndex > 0 && timestamps[endIndex] > endTime) {
            --endIndex
        }

        return endIndex - startIndex + 1
    }
}

class MyQueue<T> {
    private arr: T[] = []

    enqueue(item: T): void {
        this.arr.push(item)
    }

    dequeue(): T | undefined {
        return this.arr.shift()
    }

    isEmpty(): boolean {
        return this.arr.length === 0
    }

    size(): number {
        return this.arr.length
    }

    peek(): T | undefined {
        return this.arr[0]
    }
}
