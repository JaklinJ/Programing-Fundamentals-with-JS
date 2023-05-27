function commonElements(input1, input2) {

    for (let i = 0; i < input1.length; i++) {

        let currElement = input1[i];

        if (input2.includes(currElement)) {
            console.log(currElement);
        }

    }

}
