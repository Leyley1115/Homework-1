// 1
function min(a, b){
    if (a>b){
        return b;
    }

    else if(a<b){
        return a;
    }

    else{
        return `числа равны (${a})`;
    }
}
console.log('Задание 1')
console.log(min(8, 4));
console.log(min(6, 6));

// 2
console.log('Задание 2');
function par(k){
    if (k%2 != 0){
        return `число ${k} нечётное`;
    }
    else{
        return `число ${k} чётное`
    }
}

console.log(par(6));
console.log(par(11));

// 3
console.log('Задание 3');
function square(a){
    return `квадрат числа ${a} = ${a*a}`;
}
console.log(square(4));

// 4
console.log('Задание 4');
function age(a){
    if (a<0){
        return `(${a}) Вы ввели неправильное значение`;
    }

    else if(a>=0 && a<=12){
        return `(${a}) Привет, друг!`;
    }

    else{
        return `(${a}) Добро пожаловать!`;
    }
}

console.log(age(2));
console.log(age(-55));
console.log(age(60));

// 5
console.log('Задание 5');
function nan(a, b){
    if (isNaN(a)||isNaN(b)){
        return 'Одно или оба значения не являются числом';
    }

    else{
        return a*b
    }
}

console.log(nan(2,'g'));
console.log(nan(5,6));

// 6
console.log('Задание 6');

// for(let a=1; a<=5; a++){console.log(`${a}`)}

    for(let a=1; a<=10; a++){
        if (isNaN(a)){
            console.log('Переданный параметр не является числом');
        }

        else{
           console.log(`${a} в кубе равняется ${a**3}`);
        }
    }

// 7
console.log('Задание 6');
function getArea(){
    return (`getArea при R = ${this.radius} -> ${this.radius*3.14}`);
};

function getPerimeter(){
    return (`getPerimeter ри R = ${this.radius} -> ${2*3.14*circle1.radius}`);
};

const circle1 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter
}

const circle2 = {
    radius: 23,
    getArea: getArea,
    getPerimeter: getPerimeter
}

// for (let key in circle1){
//     console.log(`${key}:${circle1[key]}`);
// } почему не получается вывести сразу все свойства объекта, в том числе getArea и getPerimeter?

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());


