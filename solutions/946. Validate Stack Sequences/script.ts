export {validateStackSequences}

function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const result: number[] = [];
    let canPush: boolean;
    let canPop: boolean;

    do {
        canPush = false;
        canPop = false;

        const elementThatCanBePopped: number | undefined = popped.shift();
        if (elementThatCanBePopped !== undefined) {
            let elementThatNeedBePopped: number | undefined = result.pop();
            if (elementThatNeedBePopped !== undefined && elementThatNeedBePopped === elementThatCanBePopped) {
                canPop = true;
            } else {
                popped.unshift(elementThatCanBePopped);
                if (elementThatNeedBePopped !== undefined) {
                    result.push(elementThatNeedBePopped)
                }
            }
        }

        if (!canPop) {
            const elementThatCanBePushed: number | undefined = pushed.shift();
            if (elementThatCanBePushed !== undefined) {
                result.push(elementThatCanBePushed)
                canPush = true;
            }
        }
    } while (canPush || canPop)

    return result.length === 0 && pushed.length === 0 && popped.length === 0;
}