// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
const numbersValue = [];
const finalNumber = 30;
for (let i = 20; i <= finalNumber; i += 0.5){
    numbersValue.push(i);
}

console.log(numbersValue.join(" "));
// Заміна " . " на " , " для відторенная приклада
const exempleResult = numbersValue.map(number => number.toString().replace('.', ','));
console.log(exempleResult.join(" "));

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
const currentDollarPrice = 27;
const finalDollarValue = 100;
let startDollarValue = 20;
const valueDollarsPrice = {
    //Первый споб иницициализации ключа и пустого массива
    // "дол" : [],
    // "грн" : [],
};
//Второй способ инциализации пустого массива c нужным ключем в обьекте больше не придумал :(
if (!valueDollarsPrice.hasOwnProperty("дол")){
    valueDollarsPrice["дол"] = [];
}
if (!valueDollarsPrice.hasOwnProperty("грн")){
    valueDollarsPrice["грн"] = [];
}
for (startDollarValue; startDollarValue <= finalDollarValue; startDollarValue += 10){
    valueDollarsPrice["дол"].push(startDollarValue);
    valueDollarsPrice["грн"].push(startDollarValue * currentDollarPrice);
}
const resultString = valueDollarsPrice["дол"].map((dollar, index) => {
    return `${dollar} ${Object.keys(valueDollarsPrice)[0]} коштує ${valueDollarsPrice["грн"][index]} ${Object.keys(valueDollarsPrice)[1]}`;
  }).join('\n');

console.log(resultString);

//произвольное число N для следующих 3 циклов
const valueN = 467;


// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
const resultNumbers = [];
for (let i = 1; i <= 100; i++){
    if(Math.pow(i,2) <= valueN){
        resultNumbers.push(i);
    }
}
console.log(resultNumbers.join(" "));

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
let simpleValue = "";
let divNumbers = [];
for (let i = 1 ; i <= valueN ; i++){
    if (valueN % i === 0 && valueN % valueN === 0){
        divNumbers.push(i);
    }
    if (divNumbers.length > 2){
        simpleValue = "не просте";
        break;
    } else simpleValue = "просте";
}
console.log(valueN + " " + simpleValue);

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

for (let i = 1 ; i <= valueN ; i++){
    if (Math.pow(3,i) === valueN){
        console.log(`число 3 необхідно возвеусти у ${i} ступінь для отриманная ${valueN}`);
        break;
    } else if (Math.pow(3,i) > valueN){
        console.log(`немає цілого супеня для числа 3 для отриманная ${valueN}`);
        break;
    }
}