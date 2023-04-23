const person = {
    name: 'Anton Kalmbah',
    sex: 'man',
    age: 27
}

const updatePerson = user => ({
    ...user,
    age: 30
});

console.log(person);
console.log(updatePerson(person));
    
// Правила чистых функций: 
// 1. Функция должна принимать хотя бы один аргумент.
// 2. Функция должна возвращать значение или другую функцию.
// 3. Функция не должна изменять переданный ей аргумент.