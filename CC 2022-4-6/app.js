// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//Chekc to see if number is even by checking if the modulus is 0.
//If it is mulitply that number by 8
function simpleMultiplication(number) {
    if(number %2 === 0)
        return number * 8;

    return number * 9;
}


console.log(simpleMultiplication(2));