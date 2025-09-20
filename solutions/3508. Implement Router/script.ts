export {Router}

interface Packet {
    source: number
    destination: number
    timestamp: number
}

class Router {
    private readonly memoryLimit: number
    private readonly packets: Packet[]
    private readonly packetSet: Set<string>

    constructor(memoryLimit: number) {
        this.memoryLimit = memoryLimit
        this.packets = []
        this.packetSet = new Set<string>()
    }

    private static packetKey(source: number, destination: number, timestamp: number): string {
        return `${source},${destination},${timestamp}`
    }

    addPacket(source: number, destination: number, timestamp: number): boolean {
        const key: string = Router.packetKey(source, destination, timestamp)
        if (this.packetSet.has(key)) {
            return false
        }

        if (this.packets.length >= this.memoryLimit) {
            this.forwardPacket()
        }

        this.packets.push({source, destination, timestamp})
        this.packetSet.add(key)

        return true
    }

    forwardPacket(): number[] {
        if (this.packets.length === 0) {
            return []
        }

        const packet: Packet = this.packets.shift()!
        const key: string = Router.packetKey(packet.source, packet.destination, packet.timestamp)

        this.packetSet.delete(key)

        return [packet.source, packet.destination, packet.timestamp]
    }

    getCount(destination: number, startTime: number, endTime: number): number {
        let count: number = 0

        for (const packet of this.packets) {
            if (packet.destination === destination && packet.timestamp >= startTime && packet.timestamp <= endTime) {
                count++
            }
        }

        return count
    }
}
