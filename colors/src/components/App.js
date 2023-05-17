import React, { useState } from "react";
import colorData from "../data/data.json";
import ColorList from "./ColorList";

export default function App() {
    const [colors] = useState(colorData);
    return <ColorList colors={colors} />;
}