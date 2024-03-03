// Задача 1 //

for( let i = 20 ; i <= 30 ; i += 0.5){
    console.log(i);
};

// Задача 2 //
const preisDollar = 38;
for(let num = 10 ; num <= 100 ; num += 10){
    console.log(`${preisDollar} * ${num} = ${preisDollar*num} грн `);
};

// Задача 3 //
const num1 = +prompt("Введите число");
    for(let a = 1 ; a <= 100 ; a++){
        if( a**2 <= num1 ){
            console.log(a);
        } else{
          break ;
        };
    };  
// Задача 4 //
const numPrime = +prompt("Введите число") ;
// function isPrime(numPrime) {
    for(let b = 2 ; b < numPrime ; b++){
        if(numPrime % b === 0){
            console.log("false");
            break;
        } else{
            console.log("true");
            break;
        };
    };
    //return true;
//};
//console.log(isPrime(numPrime));

// Задача 5 //
const num3 = +prompt("Введите число") ;
for(let c = 1 ; c <= 10; c++ ){
    if(3**c === num3){
        console.log(c);
    } ;
};
