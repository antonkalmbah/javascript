// Базовые переменные для тестов

const name = 'Anton';
const work = 'dev'

// -------------------------------------------------------------

const func = name => `${name}, привет. Как дела?`;
console.log('Вывожу функцию по ES6: ' + func(name))

// -------------------------------------------------------------

const funcWithThrowError = (name, work) => {
    if (!name) {
        throw new Error('Ошибка с именем');
    }

    if (!work) {
        throw new Error('Ошибка с работой');
    }

    return `Привет ${name}! Ты когда-нибудь станешь ${work}`; 
}

console.log('Функция с выводом нужного текста ошибки, если нет переменной: ' + funcWithThrowError(name, work));
// если не будет одной переменной, то дальнейший код не будет отработан

// -------------------------------------------------------------

const data = ({ beautiful, name }) => {
    console.log(`Моя ${beautiful} ${name}!`);
};

const profile = {
    name: 'Yulia',
    beautiful: 'красивая'
};

data(profile)

// -------------------------------------------------------------

const [first, second] = ['lol', 'kek'];
console.log(second);

// -------------------------------------------------------------

const print = function() {
    // можно перед name и work поставить this, результат тот же
    console.log(`Mr. ${name} is ${work}`);
}

const printHike = {name, work, print};

printHike.print();
// и тоже самое при ..
print();

// -------------------------------------------------------------

const skier = {
    name,
    work,
    powderYell () {
        let up = name.toUpperCase();
        console.log(up);
    }
};

const powderYell = function () {
    // Поднимаем буквы
    let up = name.toUpperCase()
    // Опускаем буквы
    let down = name.toLowerCase()
    console.log(up, down)
}

powderYell()

// -------------------------------------------------------------

const lakes = ['Donner', 'Marlette', 'Cascade'];
const [f, ...others] = lakes;
console.log(others.join(', '))

// -------------------------------------------------------------

function direction(...arg) {
    let[start, ...remaining] = arg;
    let[finish, ...stops] = remaining.reverse();

    console.log(`Выводим колличество гор - ${arg.length}`)
    console.log(`Выводим первую гору - ${start}`)
    console.log(`Выводим последнюю гору - ${finish}`)
    console.log(`Выводим колличество оставшихся гор - ${stops.length}`)
}

direction('First', 'Second', 'Third', 'Forth', 'Five')

const food = {
    first: 'Борщь',
    second: 'Оливье'
};

const drink = 'Чай';

const generalFood = {
    ...food,
    drink
};

console.log(`Выводим всё кол-во еды:`, generalFood)