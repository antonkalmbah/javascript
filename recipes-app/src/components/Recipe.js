import React from "react";
import Instructions from "./Instructions";
import IngredientsList from "./IngredientsList";
// StarRating позволяет делать кол-во звёзд программируемым через атрибут totalStars в StarRating
import StarRating from "./IconsAction";

function Recipe({name, ingredients, steps}) {
    return (
        // -------------------- короткий вариант --------------------
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <IngredientsList list={ingredients}/>
            <Instructions title="Cooking Instructions" steps={steps}/>
            <StarRating />
        </section>
        // ----------------------------------------------------------

        // -------------------- длинный вариант --------------------
        // <section id="baked-salmon">
        //     <h1>{name}</h1>
        //     <ul className="ingredients">
        //         {ingredients.map((ingredient, i) => (
        //             <li key={i}>{ingredient.name}</li>
        //         ))}
        //     </ul>
        //     <section className="instruction">
        //         <h2>Step instruction</h2>
        //         {steps.map((step, i) => (
        //             <p key={i}>{step}</p>
        //         ))}
        //     </section>
        // </section>
        // ----------------------------------------------------------
    )
}

export default Recipe;