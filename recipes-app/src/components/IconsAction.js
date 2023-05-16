import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({selected = false}) => (
    <FaStar color={selected ? "red" : "blue"} />
);

const createArray = length => [...Array(length)];

export default function StarRating({ totalStars = 1 }) {
    return createArray(totalStars).map((n, i) => <Star key={i} />);
}