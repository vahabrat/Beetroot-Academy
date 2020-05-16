/*
2.1
age = prompt('How old are you?')

if (age<=60.0>18.0){
alert('you are adult')
}

else if (age<=18.0>12.0){
alert('you are teenager')
}

else if (age<=12.0>0.0){
alert('you are kid')
}
как быть с флоатом, который вводит пользователь
else{
alert('you are out of your mind')
}*/




/*2.2
number = prompt('please enter your number from 0 to 9')

if(number==1){
alert('!')
}

else if(number==2){
alert('@')
}

else if(number==3){
alert('#')
}

else if(number==4){
alert('$')
}

else if(number==5){
alert('%')
}

else if(number==6){
alert('^')
}

else if(number==7){
alert('&')
}

else if(number==8){
alert('*')
}

else if(number==9){
alert('(')
}

else{
alert('you are out of your mind')
}*/

/*2.2*/

/*2.4
year=prompt('введите год')

if(year%4==0 || year%400==0){
alert('this is высокосный year')
}
else{
alert('this is not высокосный year')
}*/

/*
let num = prompt('введите число')
for(let i=100;i<=100>=0;){
    console.log(i%num==0)
}
*/

let num
/*while(number !== 6){
    num=+prompt('2+2*2')
    console.log()
}*/


/*
function getNumber(a,b){
    if(a<b){
        return '-1'
    }
    else if(a>b){
        return '1'
    }
    else{
        return '0'
    }
}

const a= prompt();
const b= prompt();
console.log(getNumber(a,b))
*/

/*function getNumber(a,b){
    if(a<b){
        return a
    }
    else if(a>b){
        return b
    }
    else{
        return 'enter not equal numbers'
    }
}

console.log(getNumber(3,4))*/


function getSquare(a,b){
    if (b === undefined){
        return a*a
    }
    return a*b;
}

console.log(getSquare(4,3))
console.log(getSquare(3))


