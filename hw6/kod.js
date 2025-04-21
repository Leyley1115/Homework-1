// №1
console.log('Задание 1');
const a=[1, 5, 4, 10, 0, 3];
for(let i=0; i<a.length; i++){
    console.log(a[i]);
    if(a[i]==10)break;
}

// №2
console.log('Задание 2');

for(let i=0; i<a.length; i++){
    if(a[i]==4){
        console.log(`Индекс 4: ${i}`);
        break;
    }
}

// №3
console.log('Задание 3');

let b=[1, 3, 5, 10, 20];
b = b.join(' ');
console.log(b);

// №4
console.log('Задание 4');

let m=[];
let k=[];
const el=1;

for(let i=0; i<3; i++){
    k[i]=[];
    m.unshift(k[i]);

    for(let j=0; j<3; j++){
        k[i].unshift(el);
    }
}

console.log(m)

// №5
console.log('Задание 5');

let j=[1, 1, 1];
j.push(2, 2, 2);
console.log(j)

// №6
console.log('Задание 6');

j=[9, 8, 7, 'a', 6, 5];
j.sort();
j.pop()
console.log(j)

// // №7
// console.log('Задание 7');

// j=[9, 8, 7, 6, 5];

// while(true){
//     let ask=prompt('Введите число от 0 до 10');

//     if ( (j.includes(Number(ask)))==true){
//         alert('Угадал');
//         break
//     }

//     else if (ask==undefined){
//         break
//     }

//     else{
//         alert('Не угадал')
//     }
// }

// #8
console.log('Задание 8');

j='abcdef';
j=j.split("");
j.reverse();
j=j.join('');
console.log(j);

// #9
console.log('Задание 9');

j=[[1, 2, 3],[4, 5, 6]];
j=[...j[0], ...j[1]]
console.log(j);

// #10
console.log('Задание 10');
j=[]

for(let i=0; i<10; i++){
    let r=Math.floor(Math.random()*10+1);
    j.unshift(r);
}
console.log(j);

for(i=0; i<j.length; i++){
    if (j[i+1]){
    console.log(j[i]+j[i+1]);
    }
}

// #11
console.log('Задание 11');

function square(j){
    return j.map(item => item**2);
}

console.log(square([1, 4, 5, 11]))

// #12
console.log('Задание 12');

function mStr(j){
    return j.map(item => item.length)
}

console.log(mStr(['hello', 'world', '!']))

// #13
console.log('Задание 13');

function negative(j){
    return j.filter(item => item<0);
}
console.log(negative([1, 15, -23, 0, -17, 2, -6]))

// #14
console.log('Задание 14');

for(let i=0; i<10; i++){
    let r=Math.floor(Math.random()*10+1);
    j.unshift(r);
}
console.log(j);

function chet(j){
    return j.filter(item => item%2==0);
}
console.log(chet(j))

// #15
console.log('Задание 15');

j=[];
for(let i=0; i<3; i++){
    let r=Math.floor(Math.random()*10+1);
    j.unshift(r);
}

console.log(j);
console.log(j.reduce((a, b) => a+b)/j.length);