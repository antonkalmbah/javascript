function Image() {
    return React.createElement(
        "p",
        { className: "function_text" },
        "Печатаем текст из функции, используя компонент React"
    )
};

ReactDOM.render(
    React.createElement(Image, null, null),
    document.getElementById("root")
);