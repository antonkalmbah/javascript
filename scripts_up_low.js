const skier = {
    name,
    work,
    powderYell () {
        let up = name.toUpperCase();
        console.log(up);
    }
};

const powderYell = function () {
    // Поднимаем буквы
    let up = name.toUpperCase()
    // Опускаем буквы
    let down = name.toLowerCase()
    console.log(up, down)
};

powderYell()

// -------------------------------------------------------------