export {predictPartyVictory}

const BAN: string = "BAN";
const RADIANT: string = "R";
const DIRE: string = "D";

function canVote(member: string): boolean {
    return member !== BAN;
}

function hasVoters(members: string[]): boolean {
    const hasRadiant: boolean = members.find((member: string): boolean => member === RADIANT) !== undefined;
    const hasDire: boolean = members.find((member: string): boolean => member === DIRE) !== undefined;
    return hasRadiant && hasDire;
}

function predictPartyVictory(senate: string): string {
    const members: string[] = senate.split("");
    const roundCounter: RoundCounter = new RoundCounter(members.length);

    while (hasVoters(members)) {
        const member: string = members[roundCounter.get()];
        const toBan: string = member === RADIANT ? DIRE : RADIANT;

        if (canVote(member)) {
            let next: number = roundCounter.next();
            while (members[next] !== toBan) {
                next = (next + 1) % members.length;
            }

            members[next] = BAN;
        }

        roundCounter.increment();
    }

    return members.filter((e: string): boolean => e !== BAN)
        .find((e: string): boolean => e === RADIANT) === RADIANT ? "Radiant" : "Dire";
}

class RoundCounter {
    private i: number;
    private readonly total: number;

    constructor(total: number) {
        this.i = 0;
        this.total = total;
    }

    get(): number {
        return this.i % this.total;
    }

    next(): number {
        return (this.i + 1) % this.total;
    }

    increment(): void {
        this.i = ++this.i % this.total;
    }
}