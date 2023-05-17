import React, { useState } from "react";
import colorData from "../data/data.json";
import ColorList from "./ColorList";

export default function App() {
    // второй аргумент в массиве, возвращаемом useState, — это функция, которую мы можем использовать 
    // для изменения состояния
    const [colors, setColors] = useState(colorData);
    return (
        <ColorList 
            colors={colors} 
            onRemoveColor={id => {
                const newColors = colors.filter(color => color.id !== id);
                console.log(colors.id);
                setColors(newColors);
            }}
        />
    );
}