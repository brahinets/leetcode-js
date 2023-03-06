const findKthPositive = (arr: number[], k: number): number => {
    let missed: number[] = [];
    let guess: number = 1;

    while (missed.length < k) {
        if (!arr.includes(guess)) {
            missed.push(guess);
        }

        guess++;
    }

    return missed.pop() || -1;
};