export {dividePlayers}

function dividePlayers(skill: number[]): number {
    skill.sort((a: number, b: number): number => a - b)

    let totalChemistry: number = 0;
    const targetTeamSkill: number = skill[0] + skill[skill.length - 1];

    for (let i = 0; i < skill.length / 2; i++) {
        const currentTeamSkill: number = skill[i] + skill[skill.length - i - 1];
        if (currentTeamSkill !== targetTeamSkill) {
            return -1;
        }

        totalChemistry += skill[i] * skill[skill.length - i - 1];
    }

    return totalChemistry;
}
