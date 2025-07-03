
const getCardPosition = (deck, card) => deck.indexOf(card);

const doesStackIncludeCard = (deck, card) => deck.includes(card);

const isEachCardEven = (deck) => {
    return deck.every((element)=>element%2==0);
}

const doesStackIncludeOddCard = (deck) => {
    return deck.some((element)=>element%2==1);
}

const getFirstOddCard = (deck) => {
    return deck.find((element) => element % 2 == 1);
}

const getFirstEvenCard = (deck) => {
    return deck.findIndex((element) => element % 2 == 0);
}

//Q1
console.log(getCardPosition([9, 7, 3, 2], 2));
//Q2
console.log(doesStackIncludeCard([9, 7, 3, 2], 2));
//Q3
console.log(isEachCardEven([1, 6, 4, 2]));
console.log(isEachCardEven([10, 6, 4, 2]));
//Q4
console.log(doesStackIncludeOddCard([1, 6, 4, 2]));
console.log(doesStackIncludeOddCard([10, 6, 4, 2]));
//Q5
console.log(getFirstOddCard([1, 6, 4, 2]));
console.log(getFirstOddCard([10, 6, 4, 2]));
//Q6
console.log(getFirstEvenCard([1, 3, 5, 7]));
console.log(getFirstEvenCard([1, 3, 5, 1]));

