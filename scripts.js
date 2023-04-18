// Базовые переменные для тестов

let name = 'Anton';
let work = 'dev'

// -------------------------------------------------------------

const func = name => `${name}, привет. Как дела?`;
console.log(func(name))

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

console.log(funcWithThrowError(name, work));

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

