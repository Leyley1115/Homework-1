// #1
console.log('Задание 1')

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 console.log(people.sort((a, b) => a.age-b.age));

 // #2
console.log('Задание 2')

function isPositive(num) {
    return num>0;
    }

    function isMale(person) {
        return person.gender==='male';
    
    }
    function filter(arr, ruleFunction) {
        const res=[];
        for (let i=0; i<arr.length; i++){
            if (ruleFunction(arr[i])){
            res.push(arr[i]);
            }
        }
        return(res);
    }
    
    console.log(filter([3, -4, 1, 9], isPositive));
    
    const human = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(human, isMale));

// // #3
// console.log('Задание 3')

// const intervalId=setInterval(() => {
//     console.log(new Date());
// }, 3* 1000);

// setTimeout(() => {
// clearInterval(intervalId);
// console.log('30 секунд прошло');
// }, 30*1000);

// #4
console.log('Задание 4')
function delayForSecond(callback) {
   setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

// // #5
// console.log('Задание 5')

// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if(cb) { cb(); }
//     }, 1000);
// }

// function sayHi(name){
//     console.log(`Привет, ${name}!`);
// }

// delayForSecond(() => sayHi('Глеб'));