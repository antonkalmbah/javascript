// Базовые переменные для тестов

let name = 'Anton';
let work = 'dev'

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
