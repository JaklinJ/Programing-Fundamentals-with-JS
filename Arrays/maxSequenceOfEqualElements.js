function maxSequenceOfEqualElements(arr) {

    let seqence = 1;
    let maxSequence = 0;
    let maxSequenceNumber = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            let currentNum = Number(arr[i]);
            let previousNumber = Number(arr[i - 1]);

            if (previousNumber === currentNum) {
                seqence++;
                if (seqence > maxSequence) {
                    maxSequence = seqence;
                    maxSequenceNumber = currentNum;
                }

            } else {
                seqence = 1;
            }
        }
    }
    console.log(`${maxSequenceNumber} `.repeat(maxSequence))
}
