// внимательно - создаём элемент (createElement)
const h1_elem = React.createElement("h1", null, "AntonKalmbah's project");
const h2_elem = React.createElement("h2", null, "элемент H2");

// Ищем элемент (getElementById)
// Если мы испольщуем 2 и более элемента, то используем массив []
// ReactDOM.render([h1_elem, h2_elem], document.getElementById("root"));

// -------------------------------------------------------------

const list_elem = React.createElement(
    "ul",
    // второй элемент в createElement отвечает за тэг. Тут ID
    { id: "list_elem" },
    // если нужно использовать класс, то пишем className, т.к. class зарезервировано в JS
    React.createElement("li", null, "1"),
    React.createElement("li", null, "2"),
    React.createElement("li", null, "3"),
    React.createElement("li", null, "4"),
    React.createElement("li", null, "5"),
    React.createElement(
        "li", 
        null,
        React.createElement("button", null, "Кнопка")
    ),
);

// console.log(list_elem);
// ReactDOM.render(list_elem, document.getElementById("root"));

// -------------------------------------------------------------

const items = [
    "2 lb salmon",
    "5 sprigs fresh rosemary",
    "2 tablespoons olive oil",
    "2 small lemons",
    "1 teaspoon kosher salt",
    "4 cloves of chopped garlic"
];

// создаём список из items и добавляем его через li на страницу
const list_elem_new = React.createElement(
    "ul",
    { className: "item" },
    // для того, чтобы не было ошибки с key делаем (elem, i) и i в key
    items.map((elem, i) => React.createElement("li", { key: i }, elem))
);

// ReactDOM.render(list_elem_new, document.getElementById("root"));

// -------------------------------------------------------------