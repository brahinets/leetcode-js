export {successfulPairs}

function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    return spells.reduce((successes: number[], spell: number): number[] => {
        const potionSuccesses: number = potions
            .filter((potion: number): boolean => potion * spell >= success)
            .length;

        successes.push(potionSuccesses);

        return successes;
    }, []);
}