import React from "react";
import Instructions from "./Instructions";
import IngredientsList from "./IngredientsList";
// import Icons from "./Icons";
import StarRating from "./IconsAction";

function Recipe({name, ingredients, steps}) {
    return (
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

        // -------------------- короткий вариант --------------------
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <IngredientsList list={ingredients}/>
            <Instructions title="Cooking Instructions" steps={steps}/>
            {/* <Icons color_1="blue"/> */}
            <StarRating />
        </section>
        // ----------------------------------------------------------
    )
}

export default Recipe;