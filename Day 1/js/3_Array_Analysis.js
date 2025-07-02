
const getCardPosition = (deck, card) => deck.indexOf(card);

const doesStackIncludeCard = (deck, card) => deck.includes(card);

const isEachCardEven = (deck) => {
    for (const card of deck) {
        if (card % 2 != 0) return false;
    } 
    return true;
}

const doesStackIncludeOddCard = (deck) => {
    for (const card of deck) {
        if (card % 2 != 0) return true;
    } 
    return false;
}

const getFirstOddCard = (deck) => {
    for (const card of deck) {
        if (card % 2 != 0) return card;
    } 
    return -1;
}

const getFirstEvenCard = (deck) => {
    for (let i = 0; i < deck.length; i++) {
        if (deck[i] % 2 == 0) return i;
    } 
    return -1;
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
console.log(getFirstEvenCard([10, 6, 4, 2]));

