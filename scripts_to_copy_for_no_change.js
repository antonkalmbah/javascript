let red = {
    title: 'red',
    color: 'ff0000',
    rating: 4
};

let blue = {
    title: 'blue',
    color: '0000ff',
    rating: 0
};

// ------------------- изменяем основную переменную --------------------

function returnColor (color, rating) {
    color.rating = rating;
    return rating;
};

console.log(returnColor(red, 4));
console.log(red.rating);

// ------------------------- создаём копию -----------------------------

// 
function returnColor_2 (color, rating) {
    return Object.assign({}, color, { rating: rating });
};

console.log(returnColor_2(red, 2).rating)
console.log(red.rating)

// ---------------------------- тоже копию -----------------------------

const returnColorConst = (color) => ({
    ...color
});

console.log(returnColorConst(red))
