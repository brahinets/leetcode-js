export {numRescueBoats}

function numRescueBoats(people: number[], limit: number): number {
    people = people.toSorted((a: number, b: number) => a - b);

    let boats: number = 0;

    while (people.length > 0) {
        let peopleWeightInOneBoat: number = 0;
        let peopleInOneBoat: number = 0;
        let onePerson: number;


        while (onePerson = people.pop() || 0) {
            if (peopleWeightInOneBoat + onePerson <= limit && peopleInOneBoat < 2) {
                peopleWeightInOneBoat += onePerson;
                peopleInOneBoat++;
            } else {
                people.push(onePerson);
                break;
            }
        }

        while (onePerson = people.shift() || 0) {
            if (peopleWeightInOneBoat + onePerson <= limit && peopleInOneBoat < 2) {
                peopleWeightInOneBoat += onePerson;
                peopleInOneBoat++;
            } else {
                people.unshift(onePerson);
                break;
            }
        }

        boats++;
    }

    return boats;
}
