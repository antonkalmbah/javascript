let arr = [{title: 'Blue'}, {title: 'Red'}, {title: 'Green'}];

const addArrPush = (title, array) => array.concat({title});

console.log(addArrPush('Yellow', arr).length)
console.log(arr.length)