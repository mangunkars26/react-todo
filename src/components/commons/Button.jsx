import React from "react";

const Button = ({ onClick,children, variant = 'primary', ...props }) => {

    const baseStyle = "px-2 py-1 rounded text-white focus:outline-none";
    const variantStyles = {
        primary: "bg-blue-700 hover:bg-blue-800",
        secondary: "bg-gray-500 hover:bg-gray-600",
        danger: "bg-red-700 hover:bg-red-800",
        white: "bg-gray-50 hover:bg-gray-100",
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyle} ${variantStyles[variant]}`}
            {...props}
            >
                {children}
            </button>
    );
}


export default Button;