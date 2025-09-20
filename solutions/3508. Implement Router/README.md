# 3508. Implement Router

## Medium

Design a data structure that can efficiently manage data packets in a network router. Each data packet consists of the
following attributes:

- `source`: A unique identifier for the machine that generated the packet.
- `destination`: A unique identifier for the target machine.
- `timestamp`: The time at which the packet arrived at the router.

Implement the `Router` class:

- `Router(int memoryLimit)`: Initializes the Router object with a fixed memory limit.
- `memoryLimit` is the maximum number of packets the router can store at any given time. If adding a new packet would
  exceed this limit, the oldest packet must be removed to free up space.
- `bool addPacket(int source, int destination, int timestamp)`: Adds a packet with the given attributes to the router. A
  packet is considered a duplicate if another packet with the same source, destination, and timestamp already exists in
  the router. Return true if the packet is successfully added (i.e., it is not a duplicate); otherwise return false.
- `int[] forwardPacket()`: Forwards the next packet in FIFO (First In First Out) order. Remove the packet from storage.
  Return the packet as an array `[source, destination, timestamp]`. If there are no packets to forward, return an empty
  array.
- `int getCount(int destination, int startTime, int endTime)`: Returns the number of packets currently stored in the
  router (i.e., not yet forwarded) that have the specified destination and have timestamps in the inclusive range
  `[startTime, endTime]`. Note that queries for addPacket will be made in increasing order of timestamp.

### Constraints:

- `2 <= memoryLimit <= 10^5`
- `1 <= source, destination <= 2 * 10^5`
- `1 <= timestamp <= 10^9`
- `1 <= startTime <= endTime <= 10^9`
- At most `10^5` calls will be made to `addPacket`, `forwardPacket`, and `getCount` methods altogether.
- queries for `addPacket` will be made in increasing order of `timestamp`.
