
const getFirstCard = ([first]) => first;

const getSecondCard = ([, second]) => second;

const swapTopTwoCards = ([first, second, ...rest]) => [second, first, ...rest];

const discardTopCard = ([top, ...rest]) => [top, rest];

const insertFaceCards = ([first, ...rest]) => [first, 'jack', 'queen', 'king', ...rest];

// Q1
console.log(getFirstCard([5, 9, 7, 1, 8]));

// Q2
console.log(getSecondCard([5, 9, 7, 1, 8]));

// Q3
console.log(swapTopTwoCards([5, 9, 7, 1, 8]));

// Q4
console.log(discardTopCard([5, 9, 7, 1, 8]));

// Q5
console.log(insertFaceCards([5, 9, 7, 1, 8]));