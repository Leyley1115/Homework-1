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