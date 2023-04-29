function image() {
    return React.createElement(
        "p",
        { className: "function_text" },
        "Печатаем текст из функции, используя компонент React"
    )
};

ReactDOM.render(
    React.createElement(image, null, null),
    document.getElementById("root")
);