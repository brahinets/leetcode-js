export {successfulPairs}

function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    return spells.map((spell: number): number => {
        return potions
            .filter((potion: number): boolean => potion * spell >= success)
            .length;
    });
}