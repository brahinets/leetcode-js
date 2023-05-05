export {predictPartyVictory}

const BAN: string = "BAN";
const RADIANT= "R";
const DIRE= "D";

function canVote(member: string): boolean {
    return member !== BAN;
}

function hasVoters(members: string[]): boolean {
    const hasRadiant: boolean = members.find((member: string): boolean => member === RADIANT) !== undefined;
    const hasDire: boolean = members.find((member: string): boolean => member === DIRE) !== undefined;
    return hasRadiant && hasDire;
}

function findNextOpponentToBan(attackerIndex: number, members: string[], toBan: "R" | "D"):number {
    let next: number = attackerIndex + 1;

    while (members[next] !== toBan) {
        next = (next + 1) % members.length;
    }

    return next;
}

function predictPartyVictory(senate: string): string {
    const members: string[] = senate.split("");
    const roundCounter: RoundCounter = new RoundCounter(members.length);

    while (hasVoters(members)) {
        const member: string = members[roundCounter.get()];
        const toBan: "R" | "D" = member === RADIANT ? DIRE : RADIANT;

        if (canVote(member)) {
            const opponentToBan: number = findNextOpponentToBan(roundCounter.next(), members, toBan);
            members[opponentToBan] = BAN;
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