
//Q1
const buildSign = (occasion, name) => {
    console.log(`Happy ${occasion} ${name}!\n`);
}

buildSign("Birthday", "Sam");


//Q2

const buildBirthdaySign = (age) => {
    word = age >= 50 ? "mature" : "young";
    console.log(`Happy Birthday! What a ${word} fellow you are!\n`);
}
buildBirthdaySign(45);

//Q3 
const graduationFor = (name, year) => {
    console.log (`Congratulations ${name}!\nClass of ${year}\n`);
}
graduationFor('Hannah', 2022);


//Q4
const costOf = (sign, currency) => {
    let price = 20.00 + sign.length * 2.00;
    console.log (`Your sign costs ${price.toFixed(2)} ${currency}\n`)
}
costOf('Happy Birthday Rob!', 'dollars');
