import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

const createArray = length => [...Array(length)];

// регистрируем атрибуты в функции на установку стилей, кол-ва звёзд и пропсы
export default function StarRating({style = {}, totalStars = 10, ...props }) {
    // useState будет в себе нести значение звёзд по-умолчанию
    const [selectedStars, setSelectedStars] = useState(0); 
    return (
        // указываем, что div будет принимать применяемые стили (они указаны в компоненте Recipe) и доп.
        // параметры (props)
        <div style={{ ...style }} {...props}>
            {createArray(totalStars).map((n, i) => (
                <Star 
                    key={i} 
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i+1)} 
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    );
}