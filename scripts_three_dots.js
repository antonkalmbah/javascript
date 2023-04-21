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

console.log(`Выводим всё кол-во еды (в виду объекта):`, generalFood)

// -------------------------------------------------------------
