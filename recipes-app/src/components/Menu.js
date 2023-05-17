import React from "react";
import Recipe from "./Recipe";

function Menu({recipes}) {
    return(
        <article>
            <header>
                <h1>Список рецептов:</h1>
            </header>
            <div className="recipes">
                {recipes.map((recipe, i) => (
                    <Recipe key={i} {...recipe} />
                ))}
            </div>
        </article>
    )
}

export default Menu;