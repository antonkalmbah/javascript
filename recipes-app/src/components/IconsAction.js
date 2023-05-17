import React, {useState} from "react";
import { FaStar } from "react-icons/fa";

const Star = ({selected = false, onSelect = f => f}) => (
    <FaStar color={selected ? "red" : "blue"} onClick={onSelect} />
);

const createArray = length => [...Array(length)];

export default function StarRating({ totalStars = 5 }) {
    const[selectedStars] = useState(3);
    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star key={i} selected={selectedStars > 1} />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    );
}