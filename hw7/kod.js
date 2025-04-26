// #1
console.log('Задание 1');
let str1='js';
console.log(str1.toLocaleUpperCase())

// #2
console.log('Задание 2');

function filt(arr, str){
    const lowerStr=str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr))
    // let res=[];
    // for (let i=0; i<arr.length; i++){
    //     if (arr[i].toLowerCase().startsWith(str.toLowerCase())){
    //         res.push(arr[i]);
    //     }
    //     return res;
    // }
}

console.log(filt(['Jacob', 'JavaScript', 'Java',  'str'], 'ja'))

// #3
console.log('Задание 3');

let n=32.58884;
console.log(Math.floor(n));
console.log(Math.ceil(n));
console.log(Math.round(n));

// #4
console.log('Задание 4');

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

// #5
console.log('Задание 5');

function getRandomNumb(){
    return Math.floor(Math.random()*10)+1;
}
console.log(getRandomNumb());

// #6
console.log('Задание 6');

function arrRandomLength(num){
    return Array.from({length: Math.floor(num/2)}, () => Math.floor(Math.random()*num))
}

console.log(arrRandomLength(15));

// function arrRandomLength(num){
//     let res=[];
//     for(let i=0; i<Math.floor(num/2); i++){
//         res.push(Math.floor(Math.random()*num));
//     }
//     return res;
// }

// console.log(arrRandomLength(15))

// #7
console.log('Задание 7');

function minMax(min, max){
    return Math.floor(Math.random()*(max=min+1)+min);
}
console.log(minMax(12, 25));

// #8
console.log('Задание 8');

let currentDate = new Date();
console.log(currentDate)

// #9
console.log('Задание 9');

currentDate = new Date();
currentDate.setDate(currentDate.getDate()+73);
console.log(currentDate)

// #10
console.log('Задание 10');

function formateDate(date){
    const days=['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const months=['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Ин', 'Ил', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек'];
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const daysOfWeek = days[date.getDay()-1];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `
    Дата: ${day} ${months[month]} ${year} - это ${daysOfWeek}.
    Время: ${hours}:${minutes}:${seconds}
    `;
}
console.log(formateDate(new Date()));