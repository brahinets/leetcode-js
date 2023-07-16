export {smallestSufficientTeam}

function smallestSufficientTeam(req_skills: string[], people: string[][]): number[] {
    const teams: Array<Set<number>> = formTeams(people, new Set<number>(), new Set<string>(req_skills));

    let minTeam: Set<number> = new Set<number>(new Array(8)
        .fill(0)
        .map((_: number, index: number): number => index));

    for (const t of teams) {
        if (t.size < minTeam.size) {
            minTeam = t;
        }
    }

    return [...minTeam];
}

function formTeams(teammatesPool: string[][], team: Set<number>, requiredSkills: Set<string>): Set<number>[] {
    if (requiredSkills.size === 0) {
        return [new Set<number>()];
    }

    let teams: Set<number>[] = [];

    const [requiredSkill, ...otherRequiredSkills] = requiredSkills;
    const possibleTeammatesIds: number[] = findTeammatesWithSkill(teammatesPool, requiredSkill);
    for (const teammateId of possibleTeammatesIds) {
        teams.push(new Set<number>([teammateId]))
    }

    requiredSkills = new Set<string>(otherRequiredSkills);
    while (requiredSkills.size > 0) {
        const [requiredSkill, ...otherRequiredSkills] = requiredSkills;
        const possibleTeammatesIds: number[] = findTeammatesWithSkill(teammatesPool, requiredSkill);
        requiredSkills = new Set<string>(otherRequiredSkills);

        const newTeams: Set<number>[] = [];
        for (const teammateId of possibleTeammatesIds) {
            for (const team of teams) {
                newTeams.push(new Set<number>([...team, teammateId]));
            }
        }

        teams = newTeams;
    }

    return teams;
}

function findTeammatesWithSkill(teammatesPool: string[][], requiredSkill: string): number[] {
    const team: number[] = [];

    for (let i: number = 0; i < teammatesPool.length; i++) {
        if (teammatesPool[i].includes(requiredSkill)) {
            team.push(i);
        }
    }

    return team;
}
