const words = 'The new string code'
const string = words.replace(/ /g, '-');

console.log('Декларативный способ: ', string);

// -------------------------------------------------------------

new_words = '';

for (i = 0; i < words.length; i++) {
    if (words[i] === ' ') {
        new_words += '-';
    } else {
        new_words += words[i];
    }
}

console.log(new_words);