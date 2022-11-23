export const findDivisor = (number) => {

    const my_array = [];
    let initial = 0;

    while (initial<=number) {
        if (initial % 2 != 0 && initial % 3 != 0) {
            my_array.push(initial);
            initial +=1;
        } else {
            initial += 1;
        }
    }

    return my_array;
}



