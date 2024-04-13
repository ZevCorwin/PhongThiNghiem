function findOperation(x, y, z) {
    if (x + y === z) {
        return '+';
    } else if (x - y === z) {
        return '-';
    } else if (x * y === z) {
        return '*';
    } else if (y !== 0 && x / y === z) {
        return '/';
    } else {
        return 'None of the operations can form the equation';
    }
}

console.log(`Replacing $ in "10 $ 30 = 300" yields: ${findOperation(10, 30, 300)}`); 
console.log(`Replacing $ in "15 $ 5 = 3" yields: ${findOperation(15, 5, 3)}`);
console.log(`Replacing $ in "10 $ 2 = 12" yields: ${findOperation(10, 2, 12)}`); 
console.log(`Replacing $ in "10 $ 2 = 5" yields: ${findOperation(10, 2, 5)}`); 
console.log(`Replacing $ in "10 $ 2 = 8" yields: ${findOperation(10, 2, 8)}`); 