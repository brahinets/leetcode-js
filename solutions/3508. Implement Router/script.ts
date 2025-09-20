import {PriorityQueue} from "../../common/PriorityQueue"

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
    private static readonly PACKETS_NOT_FOUND_FOR_GIVEN_TIMESTAMP_RANGE: number = 0
    private readonly memoryLimit: number
    private readonly packets: PriorityQueue<Packet>
    private readonly packetSet: Set<string>
    private readonly destinationToTimestamps: Map<number, Timestamps>

    constructor(memoryLimit: number) {
        this.memoryLimit = memoryLimit
        this.packets = new PriorityQueue<Packet>((a: Packet, b: Packet): number => a.timestamp - b.timestamp)
        this.packetSet = new Set<string>()
        this.destinationToTimestamps = new Map<number, Timestamps>()
    }

    private static packetKey(source: number, destination: number, timestamp: number): string {
        return `${source},${destination},${timestamp}`
    }

    addPacket(source: number, destination: number, timestamp: number): boolean {
        const packet: Packet = {source, destination, timestamp}
        const key: string = Router.packetKey(packet.source, packet.destination, packet.timestamp)

        if (this.packetSet.has(key)) {
            return false
        }

        if (this.packets.size() === this.memoryLimit) {
            const toRemove = this.packets.dequeue()!
            const toRemoveAsString = Router.packetKey(toRemove.source, toRemove.destination, toRemove.timestamp)
            this.packetSet.delete(toRemoveAsString)
        }

        this.packets.enqueue(packet)
        this.packetSet.add(key)

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

        const packet: Packet = this.packets.dequeue()!
        const key: string = Router.packetKey(packet.source, packet.destination, packet.timestamp)

        this.packetSet.delete(key)

        return [packet.source, packet.destination, packet.timestamp]
    }

    getCount(destination: number, startTime: number, endTime: number): number {
        if (!this.destinationToTimestamps.has(destination)) {
            return Router.PACKETS_NOT_FOUND_FOR_GIVEN_TIMESTAMP_RANGE
        }

        const timestamps: number[] = this.destinationToTimestamps.get(destination)!.timestamps
        let startIndex: number = this.destinationToTimestamps.get(destination)!.startIndex
        let endIndex: number = timestamps.length - 1

        if (startIndex > endIndex || startIndex === timestamps.length || timestamps[startIndex] > endTime || timestamps[endIndex] < startTime) {
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
