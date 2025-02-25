export {smallestSufficientTeam}

function smallestSufficientTeam(req_skills: string[], people: string[][]): number[] {
    const teams: Array<Set<number>> = formTeams(people, skillsByPopularity(people, req_skills))

    let minTeam: Set<number> = new Set<number>(new Array(people.length)
        .fill(0)
        .map((_: number, index: number): number => index))

    for (const team of teams) {
        if (team.size <= minTeam.size) {
            minTeam = team
        }
    }

    return [...minTeam]
}

function formTeams(teammatesPool: string[][], requiredSkills: string[]): Set<number>[] {
    if (requiredSkills.length === 0) {
        return [new Set<number>()]
    }

    const teams: Set<number>[] = []
    const requiredSkill: string = requiredSkills[0]
    const otherRequiredSkills: string[] = requiredSkills.slice(1)
    const possibleTeammatesIds: number[] = findTeammatesWithSkill(teammatesPool, requiredSkill)
    for (const teammateId of possibleTeammatesIds) {
        teams.push(new Set<number>([teammateId]))
    }

    return fillTeams(teammatesPool, teams, otherRequiredSkills)
}

function fillTeams(teammatesPool: string[][], teams: Set<number>[], requiredSkills: string[]): Set<number>[] {
    if (requiredSkills.length === 0) {
        return teams
    }

    const newTeams: Set<number>[] = []
    const requiredSkill: string = requiredSkills[0]
    const otherRequiredSkills: string[] = requiredSkills.slice(1)
    const possibleTeammatesIds: number[] = findTeammatesWithSkill(teammatesPool, requiredSkill)
    for (const team of teams) {
        let teamNeed: boolean = true
        for (const t of team) {
            if (teammatesPool[t].includes(requiredSkill)) {
                teamNeed = false
                break
            }
        }

        if (teamNeed) {
            for (const teammateId of possibleTeammatesIds) {
                newTeams.push(new Set<number>([...team, teammateId]))
            }
        } else {
            newTeams.push(team)
        }
    }

    return fillTeams(teammatesPool, newTeams, otherRequiredSkills)
}

function findTeammatesWithSkill(teammatesPool: string[][], requiredSkill: string): number[] {
    const team: number[] = []

    for (let i: number = 0; i < teammatesPool.length; i++) {
        if (teammatesPool[i].includes(requiredSkill)) {
            team.push(i)
        }
    }

    return team
}

function skillsByPopularity(people: string[][], skills: string[]): string[] {
    const counts: Map<string, number> = peopleHavingSkill(people)
    return [...skills]
        .sort((s1: string, s2: string): number => (counts.get(s1) ?? 0) - (counts.get(s2) ?? 0))
}

function peopleHavingSkill(people: string[][]): Map<string, number> {
    const counts: Map<string, number> = new Map<string, number>()

    for (const skills of people) {
        for (const skill of skills) {
            counts.set(skill, (counts.get(skill) ?? 0) + 1)
        }
    }

    return counts
}
