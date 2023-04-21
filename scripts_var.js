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
