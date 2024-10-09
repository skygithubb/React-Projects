import React, { useState, useEffect } from 'react';

function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    function RandomColorGenerate(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[RandomColorGenerate(hex.length)];
        }
        setColor(hexColor);
    }

    function handleCreateRandomRgbColor() {
        const r = RandomColorGenerate(256);
        const g = RandomColorGenerate(256);
        const b = RandomColorGenerate(256);
        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    useEffect(() => {
        if (typeOfColor === "rgb") {
            handleCreateRandomRgbColor();
        } else {
            handleCreateRandomHexColor();
        }
    }, [typeOfColor]);

    return (
        <div style={{ backgroundColor: color }} className="w-screen h-screen flex flex-col items-center justify-center">
            <h3 className="text-white text-2xl mb-4">{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
            <h1 className="text-white text-5xl mb-6">{color}</h1>
            <div className="flex flex-col space-y-4">
                <button onClick={() => setTypeOfColor("hex")} className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-6 rounded shadow-md transition duration-200">Create Hex Color</button>
                <button
                    onClick={typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor}
                    className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-6 rounded shadow-md transition duration-200">
                    Generate Random Color
                </button>
                <button onClick={() => setTypeOfColor("rgb")} className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-6 rounded shadow-md transition duration-200">Generate RGB Color</button>
            </div>
        </div>
    );
}

export default RandomColor;
