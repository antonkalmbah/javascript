import React from "react";
import Menu from "./components/Menu";
import {render} from "react-dom";
import data from "./data/recipes.json";

render(<Menu recipes={data}/>, document.getElementById("root"));