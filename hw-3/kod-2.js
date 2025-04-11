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