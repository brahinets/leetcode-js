export {smallestSufficientTeam}

function smallestSufficientTeam(req_skills: string[], people: string[][]): number[] {
    const teams: Array<Set<number>> = formTeams(people, new Set<string>(req_skills));

    let minTeam: Set<number> = new Set<number>(new Array(people.length)
        .fill(0)
        .map((_: number, index: number): number => index));

    for (const team of teams) {
        if (team.size < minTeam.size) {
            minTeam = team;
        }
    }

    return [...minTeam];
}

function formTeams(teammatesPool: string[][], requiredSkills: Set<string>): Set<number>[] {
    if (requiredSkills.size === 0) {
        return [new Set<number>()];
    }

    const teams: Set<number>[] = [];
    const [requiredSkill, ...otherRequiredSkills] = requiredSkills;
    const possibleTeammatesIds: number[] = findTeammatesWithSkill(teammatesPool, requiredSkill);
    for (const teammateId of possibleTeammatesIds) {
        teams.push(new Set<number>([teammateId]));
    }

    return fillTeams(teammatesPool, teams, new Set<string>(otherRequiredSkills));
}


function fillTeams(teammatesPool: string[][], teams: Set<number>[], requiredSkills: Set<string>): Set<number>[] {
    if (requiredSkills.size === 0) {
        return teams;
    }

    const newTeams: Set<number>[] = [];
    const [requiredSkill, ...otherRequiredSkills] = requiredSkills;
    const possibleTeammatesIds: number[] = findTeammatesWithSkill(teammatesPool, requiredSkill);
    for (const team of teams) {
        let teamNeed: boolean = true;
        for (const t of team) {
            if (teammatesPool[t].includes(requiredSkill)) {
                teamNeed = false;
                break;
            }
        }

        if (teamNeed) {
            for (const teammateId of possibleTeammatesIds) {
                newTeams.push(new Set<number>([...team, teammateId]));
            }
        } else {
            newTeams.push(team);
        }
    }

    return fillTeams(teammatesPool, newTeams, new Set<string>(otherRequiredSkills));
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
