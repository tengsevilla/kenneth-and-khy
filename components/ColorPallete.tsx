import React, { useState } from "react";

const ColorPalette = () => {
    const colors = [
        { hex: "#2A381F", name: "Dark Green" },
        { hex: "#354320", name: "Forest Green" },
        { hex: "#596128", name: "Olive Green" },
        { hex: "#BFA16D", name: "Gold Beige" },
        { hex: "#F7E7CE", name: "Cream / Champange" },
    ];

    const [tooltip, setTooltip] = useState<string | null>(null);

    return (
        <div className="flex justify-center gap-4">
            {colors.map((color, index) => (
                <div
                    key={index}
                    className="relative w-14 h-14 rounded-full border-4 border-white shadow-md cursor-pointer"
                    style={{ backgroundColor: color.hex }}
                    onMouseEnter={() => setTooltip(color.name)} // Show tooltip on hover
                    onMouseLeave={() => setTooltip(null)} // Hide tooltip on hover out
                    onClick={() => setTooltip(color.name)} // Show tooltip on click
                >
                    {/* Tooltip */}
                    {tooltip === color.name && (
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 rounded-md bg-black text-white text-sm px-2 py-1 shadow-lg">
                            {color.name}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ColorPalette;
