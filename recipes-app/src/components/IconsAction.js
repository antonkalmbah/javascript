import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

const createArray = length => [...Array(length)];

export default function StarRating({style = {}, totalStars = 10 }) {
    // useState будет в себе нести значение звёзд по-умолчанию
    const [selectedStars, setSelectedStars] = useState(2); // 
    return (
        <div style={{ ...style }}>
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