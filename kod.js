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