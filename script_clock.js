// функция даёт одну секунду
const oneSecond = () => 1000;
// функция даёт текущее время
const getCurrentTime = () => new Date();
// очистка консоли
const clear = () => console.clear();
// вывод сообщения о времени в консоль
const log = message => console.log(message);

const compose = (...fns) => arg => fns.reduce((composed, f) => f(composed), arg);

const serializeClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
});

const display = target => time => target(time);

const formatClock = format => time =>
    format
        .replace("hh", time.hours)
        .replace("mm", time.minutes)
        .replace("ss", time.seconds);

const prependZero = key => clockTime => ({
    ...clockTime,
    key: clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key]
});

const doubleDigits = civilianTime =>
    compose(
        prependZero("hours"),
        prependZero("minutes"),
        prependZero("seconds")
    )
(civilianTime);

const startTicking = () => setInterval(
    compose(
        clear,
        getCurrentTime,
        serializeClockTime,
        formatClock("hh:mm:ss"),
        display(log)
    ),
    oneSecond()
);

startTicking();