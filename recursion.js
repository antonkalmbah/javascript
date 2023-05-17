const rec = (value, fn) => {
    fn(value);
    return value > 0 ? rec(value - 1, fn) : value;
};


// -------------------------------------------------------------

const recTime = (value, fn, delay = 1000) => {
    fn(value);
    return value > 0 
        ? setTimeout(() => recTime(value - 1, fn), delay)
        : value
};

// -------------------------------------------------------------

// rec(100, value => console.log(value))
// recTime(100, value => console.log(value))


// -------------------------------------------------------------

const dan = {
    type: "person",
    data: {
        gender: "male",
        info: {
            id: 22,
            fullname: {
                first: "Dan",
                last: "Deacon"
            }
        }
    }
};

const danFunc = (fields, object = {}) => {
    // ... - оператор распросрания
    const[first, ...remaining] = fields.split(', ');
    return remaining.lenght ? danFunc(remaining.join(', '), object[first]) : object[first];
};

danFunc("data.info.id", dan);
