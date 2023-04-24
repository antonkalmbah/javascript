const university = ["SFU", "DGTU", "RGEU"];

const houses = {
    "Днепровский": 116,
    "Плодородный": 55,
    "Немировича-Данченко": 78
};

const person = [
    {
        name: "Anton",
        age: 27,
        sex: "men"
    },
    {
        name: "Yulia",
        age: 27,
        sex: "woman"
    }
];

const arrayNumbers = [1, 56, 88 ,5 ,44 ,35 ,73 ,71];

// filter создаёт новый список
// ищём только нужный ВУЗ в списке, который начинается с буквы R
let rUniversiry = university.filter(u => u[0] === "R")

// удаляем с списка ненужный ВУЗ при помощи filter
const deleteUniversity = (cut, university) => university.filter(u => u !== cut);

// добавляем в массив данные с помощью map
const mapUniversity = university.map(u => `${u} ВУЗы в Ростове-на-Дону`)

// используем массив, как объект с помощь map и key
const objectHouses = Object.keys(houses).map(result => ({
    улица: result,
    номер: houses[result]
}));

// выполняем поиск максимального числа с помощью reduce (reduceRight делает тоже самое только в обратном порядке)
const sortArrayNumbers = arrayNumbers.reduce((max, num) => (max > num ? max : num), 0);

// превращаем массив в объект
const objPerson = person.reduce((hash, {name, age, sex}) => {
    hash[name] = {age, sex};
    return hash;
}, {});


console.log(university);
console.log(university.join(', '));
console.log(rUniversiry);
console.log(deleteUniversity("DGTU", university).join(', '));
console.log(mapUniversity.join('\n'));
console.log(objectHouses);
console.log('Вывод самого большого числа из списка:', sortArrayNumbers);
console.log(objPerson);
