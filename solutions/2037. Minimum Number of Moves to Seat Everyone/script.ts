export {minMovesToSeat}

function minMovesToSeat(seats: number[], students: number[]): number {
    const sortedSeats: number[] = seats.sort((a: number, b: number): number => a - b)
    const sortedStudents: number[] = students.sort((a: number, b: number): number => a - b)

    let moves: number = 0
    for (let i = 0; i < sortedStudents.length; i++) {
        moves += Math.abs(sortedStudents[i] - sortedSeats[i])
    }

    return moves
}
