import React from "react";
import { FaStar } from "react-icons/fa";

export default function Icons({color = "red"}) {
    return [
        <FaStar color={color="blue"} />,
        <FaStar color={color="blue"} />,
        <FaStar color={color="blue"} />,
        <FaStar color={color="blue"} />,
        <FaStar color={color="blue"} />
    ]
}

