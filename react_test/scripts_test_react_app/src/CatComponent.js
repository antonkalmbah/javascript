import React from "react";

function Cat({name}) {
    return(
        // Для того, чтобы можно было вывести несколько тэгов одновременно используем React.Fragment, который
        // можно заменить на <>...</>
        <>
            <br/>
            <input id="name" />
            <h1 id="name">Hello, {name}</h1>;
        </>
    )
}

export default Cat;