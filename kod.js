// #1
function playNumber(){
    const number = Math.floor((Math.random() * 100) + 1);
   
    while(true){
        let userNumber = prompt('Введите число от 1 до 100');
    
        if (userNumber>number && userNumber<=100){
           alert(`указанное число(${userNumber}) больше загаданного`);
        }

        else if(userNumber<number && userNumber>=1){
            alert(`указанное число (${userNumber}) меньше загаданного`);
        }

        else if(userNumber==number){
            alert(`угадал! это число ${number}`);
        break
        }

        else if(userNumber==undefined){
            break;
        }

        else{
            alert('загаданное число вне указанного диапазона');
        }
    }
}

// #2
function equation(){
    const a = Math.floor(Math.random()*10+1);
    const b = Math.floor(Math.random()*10+1);
    const n = Math.floor(Math.random()*4+1);
    function k(n){
        switch(n){
            case 1: return k = '+';
            case 2: return k = '-';
            case 3: return k = '*';
            case 4: return k = '/';
        }
    }

        let operator = k(n);

        if (operator==='+'){
            answer=a+b;
            while(true){
                let userAnswer = prompt(`Уравнение: ${a} ${k} ${b} = . Введите ответ`);
                if (answer==userAnswer){
                    alert(`Верно, ответ ${answer}`);
                    break
                }

                else if(userAnswer==undefined){
                    break;
                }

                else{
                    alert('Неверно, попробуй ещё раз');
                }
            }
        }
    
        else if (operator==='-'){
            answer=a-b;
            while(true){
                let userAnswer = prompt(`Уравнение: ${a} ${k} ${b} = . Введите ответ`);
                if (answer==userAnswer){
                    alert(`Верно, ответ ${answer}`);
                    break
                }

                else if(userAnswer==undefined){
                    break;
                }

                else{
                    alert('Неверно, попробуй ещё раз');
                }
            }
        }

        else if (operator==='*'){
            answer=a*b;
            while(true){
                let userAnswer = prompt(`Уравнение: ${a} ${k} ${b} = . Введите ответ`);
                if (answer==userAnswer){
                    alert(`Верно, ответ ${answer}`);
                    break
                }

                else if(userAnswer==undefined){
                    break;
                }

                else{
                    alert('Неверно, попробуй ещё раз');
                }
            }
        }

        else if (operator==='/'){
            answer=Math.round(a/b);
            while(true){
                let userAnswer = prompt(`Уравнение: ${a} ${k} ${b} = . Введите ответ(округлите при необходимости и введите целое число):`);
                if (answer==userAnswer){
                    alert(`Верно, ответ ${answer}`);
                    break
                }

                else if(userAnswer==undefined){
                    break;
                }

                else{
                    alert('Неверно, попробуй ещё раз');
                }
            }
        }
    }


// #3

function text(){
    while(true){
    let userText=prompt('Введите ваш текст:');
    let regexp=new RegExp('^[a-zа-яА-Я ]*$');

    if (regexp.test(userText)){

        function reverseWords(userText) {
            userText = userText.split(" ");
            let res = [];
    
            for (let i = 0; i < userText.length; i++){
                res.push(userText[i].split("").reverse().join(""));  
            }  
    
            return res.join(" ");
          }
          
          alert(reverseWords(userText));
        break
        }

    else if (userText==undefined){
        break
    }

    else{
        alert('Были введены не буквенные символы.')
        }
    }
}

// №4
function quiz(){
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    let i = 0;

    for(let elementment of quiz){
        let answer=prompt(`${elementment.question} \nВарианты ответов: ${elementment.options}`)
        if (answer.includes(elementment.correctAnswer)){
            i++
        }
        
        else{
            i = i;
        }
    }
    alert(`Число верных ответов: ${i}`);
}

// №5
function one_third(){
    const vars=["Бумага", "Камень", "Ножницы"];
    compVar=vars[Math.floor(Math.random()*3)];
    let userVar = prompt('Напишите цифру вашего варианта: \n1-Бумага\n2-Камень\n3-Ножницы')

    if ((userVar-1)<vars.indexOf(compVar) && userVar != 1 || userVar==1 && vars.indexOf(compVar)==1 || userVar==3 && vars.indexOf(compVar)==0){
        alert(`Компьютер выбрал: ${compVar},\nВы выбрали: ${vars[userVar-1]}.\nРезультат: Вы победили`);
    }

    else if((userVar-1)==vars.indexOf(compVar)){
        alert(`Компьютер выбрал: ${compVar},\nВы выбрали: ${vars[userVar-1]}.\nРезультат: Ничья`);
    }

    else{
        alert(`Компьютер выбрал: ${compVar},\nВы выбрали: ${vars[userVar-1]}.\nРезультат: Вы проиграли`);
    }
}

// 5
function one_third(){
    const vars=["Бумага", "Камень", "Ножницы"];
    compVar=vars[Math.floor(Math.random()*3)];
    let userVar = prompt('Напишите цифру вашего варианта: \n1-Бумага\n2-Камень\n3-Ножницы')

    if (userVar==undefined || userVar<1 || userVar>3){
        alert('Данные не введены или введены неверно');
    }

    else if ((userVar-1)<vars.indexOf(compVar) && userVar != 1 || userVar==1 && vars.indexOf(compVar)==1 || userVar==3 && vars.indexOf(compVar)==0){
        alert(`Компьютер выбрал: ${compVar},\nВы выбрали: ${vars[userVar-1]}.\nРезультат: Вы победили`);
    }

    else if((userVar-1)==vars.indexOf(compVar)){
        alert(`Компьютер выбрал: ${compVar},\nВы выбрали: ${vars[userVar-1]}.\nРезультат: Ничья`);
    }

    else{
        alert(`Компьютер выбрал: ${compVar},\nВы выбрали: ${vars[userVar-1]}.\nРезультат: Вы проиграли`);
    }
}