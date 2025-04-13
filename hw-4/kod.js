// 1
console.log('Задание 1');
for(let i=1; i<=2; i++){console.log('Привет');}

// 2
console.log('Задание 2');
for(let a=1; a<=5; a++){console.log(`${a}`)}

// 3
console.log('Задание 3');
for(let b=7; b<=22 && b>=7; b++){console.log(`${b}`)}

// 4
const obj={
"Коля" : '200',
"Вася" : '300',
"Петя" : '400'
}
console.log('Задание 4');
for (let key in obj){console.log(`${key} : ${obj[key]}`)}

// 5
console.log('Задание 5');
for(let n = 1000, num=1; n>=50; num++){
    n=n/2;
    console.log(`${n}, ${num} раз(а)`);
}

// 6
console.log('Задание 6');
for(let wd=2; wd<=31; wd=wd+7){console.log(`Сегодня Пятница, ${wd}-е число. Необходимо подготовить отчет.`)}
