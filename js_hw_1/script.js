/*
4.1

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

/*

function getNumber(a,b){
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



/*
4.4
function getSquare(a,b){
    if (b === undefined){
        return a*a
    }
    return a*b;
}

console.log(getSquare(4,3))
console.log(getSquare(3))*/



/*4.2
function getFactorial(number){
    if(number===1){
        return 1
    }
    else{
    return getFactorial(number-1)*number
    }
}

console.log(getFactorial(5))*/


/*
4.3
function getNumber(a,b,c){
    getString = ""+a+b+c
    return +getString
}

console.log(getNumber(1,4,9))*/

/*

4.5

function perfectNum(n){
    let s=0;
    let x;*/
/*остаток от деления*//*


    for (let i = 1;i < n-1;i++){
        x = n%i;
        if (x === 0){
            s=s+i
        }
    }
    if(s === n){
        return true
    }
    else{
        return false
    }
}

console.log(perfectNum(6))
console.log(perfectNum(28))
console.log(perfectNum(195))
*/

/*

4.6

function getPN(num1,num2){
    let ranger = num1-num2
    let range = Math.abs(ranger)
    for( let char of range){
        return char
    }

}

console.log(getPN(15,30))

*/


/*
Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом.
Функция для вывода на экран информации об автомобиле.
Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
*/

/*
5.1
const car = {
    manufacturer:'Tesla',
    model:'Model S',
    year:2020,
    averageSpeed:99,
    showInfo:function(){
        return `${this.manufacturer} ${this.model} ${this.year}`
    },
    showTime:function(distance){
        const averageSpeed = this.averageSpeed;
        const time = distance / averageSpeed;
        if (distance < averageSpeed){
            return (time * 60).toFixed(0);
        }
        return (time + time / 4).toFixed(0);
    }
}

console.log(car.showInfo())
console.log(car.showTime(25))
console.log(car.showTime(1000))
*/

/*const = {
    chislitel:0,
    znamenatel:0,
    sum:function(){
    }
}*/


/*

*/

/*const accordion =  ('accordion')
accordion.addEventListener('click',function(event){

    const active = document.querySelector('.title.active')

    if(active){
        active.classList.remove('active')
        document.querySelector('.content.active').classList.remove('active')

    }


    event.target.classList.add('active')
    event.target.nextElementSibling.classList.add('active')

    console.log(event.target, event.target.nextElementSibling)

})*/









