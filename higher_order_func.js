const invokeIf = (condition, ifTrue, ifFalse) => condition ? on() : off();

const on = () => console.log('Добро пожаловать!');
const off = () => console.log('Вы не авторизованы.');

invokeIf(true, on, off);
invokeIf(false, on, off);

// -------------------------------------------------------------

const userLogs = userName => message =>
    console.log(`${userName} -> ${message}`);

const log = userLogs("antonkalmbah");

log('активировано 20 штук');
