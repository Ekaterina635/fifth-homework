//1
let number=-1
if (number > 0) {
    console.log('положительное');
} else if (number < -0) {
    console.log('отрицательное');
} 
 else {
    console.log('ноль');
}

//2 задание
let high=1.8
let weight=75
if ((weight/high**2) >= 40) {
    console.log('Ожирение 3 степени')
} else if ((weight/high**2) >= 35) {
    console.log('Ожирение 2 степени')
} else if ((weight/high**2) >= 30) {
    console.log('Ожирение 1 степени')
} else if ((weight/high**2) >= 25)   { 
    console.log('Избыточная масса тела')
} else if ((weight/high**2) >= 18.5) {
    console.log('Нормальная масса тела')
} else if ((weight/high**2) < 18.5) {
    console.log('Недостаточная масса тела')
} else {
    console.log('не определено')
}

// 3
const month = 6;
let monthName;

switch (month) {
    case 1:
        monthName = 'Январь';
        break;
    case 2:
        monthName = 'Февраль';
        break;
    case 3:
        monthName = 'Март';
        break;
    case 4:
        monthName = 'Апрель';
        break;
    case 5:
        monthName = 'Май';
        break;
    case 6:
        monthName = 'Июнь';
        break;
    case 7:
        monthName = 'Июль';
        break;
    case 8:
        monthName = 'Август';
        break;
    case 9:
        monthName = 'Сентябрь';
        break;
    case 10:
        monthName = 'Октябрь';
        break;
    case 11:
        monthName = 'Ноябрь';
        break;
    case 12:
        monthName = 'Декабрь';
        break;
    default:
        monthName = 'Неверный месяц';
}

console.log(monthName);


// 4 задание
const menu = 3;
let foodType;

switch (menu) {
    case 1:
        foodType = 'Закуска';
        break;
    case 2:
         foodType= 'Первое блюдо/суп';
        break;
    case 3:
        foodType = 'Второе блюдо/главное';
        break;
    case 4:
        foodType = 'Дессерт';
        break;
    case 5:
        foodType = 'Напиток';
        break;
    default:
        foodType = 'Такого блюда не обнаружено';
}

console.log(foodType);