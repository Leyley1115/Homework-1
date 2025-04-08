// // 1
// let a=10;
// alert(`1.1) ${a}`);

// a=20;
// alert(`1.2) ${a}`);

// // 2
// let b=2007;
// alert(`2) Год выпуска первого iPhone: ${b}`);

// // 3
// let c='Брендан Эйх или Айк';
// alert(`3) ${c} --  создатель языка JavaScript.`);

// // 4
// let a1=10, a2=2;
// alert(`4) сумма:${a1+a2}, разность:${a1-a2}, произведение:${a1*a2}, частное:${a1/a2}`)

// // 5
// alert(`5) ${result=2**5}`);

// // 6
// a=9, b=2;
// alert(`6) ${a%b}`);

// // 7
// let num=1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// ++num;
// --num;
// alert(`7) ${num}`);

// // 8
// let age = prompt('8) Сколько вам лет?');
// alert(age)

// // 9
// const user={
// name:'Аля',
// age: 28,
// isAdmin: true
// }

// // 10
// let name1=prompt('Как Вас зовут?')
// alert(`Привет, ${name1}!`)



// 1
let password = 'пароль';
let p = prompt('1) Введите пароль');
if (p==password){
    alert('Пароль введен верно');
}
else{
    alert('Пароль введен неправильно');
}

// 2
let c=prompt('2) Введите переменную');
if(c>0 && c<10){
    alert('Верно');
}
else{
    alert('Неверно');
}

// 3
let d=prompt('2) Введите первую переменную');
let e=prompt('2) Введите вторую переменную');
if(d>100 || e>100){
    alert('Верно');
}
else{
    alert('Неверно');
}

// 4
let a = '2';
let b = '3';
alert(`6) ${Number(a) + Number(b)}`);

// 5
let monthNumber=prompt('5) введите номер месяца');
switch(monthNumber){
    case '11':
    case '12':
    case '1':
        alert('зима');
        break
    case '2':
    case '3':
    case '4':
        alert('весна');
        break

    case '5':
    case '6':
    case '7':
        alert('лето');
        break

    case '8':
    case '9':
    case '10':
        alert('осень');
        break
    
    default:
        alert('???');
}