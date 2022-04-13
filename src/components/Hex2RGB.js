import React, {useState} from "react";
import HexConverterForm from "./HexConverterForm";
import ColorChanger from "./ColorChanger";

const Hex2RGB = () => {
    const defaultBackgroundColor = '#a5a5a5';
    const errorBackgroundColor = '#ff0000';
    const [backgroundColor, setBackgroundColor] = useState(defaultBackgroundColor);

    const handleValid = (value) => {
        setBackgroundColor(value);
    };

    const handleError = () => {
        setBackgroundColor(errorBackgroundColor);
    };

    return (
        <>
            <HexConverterForm onError={handleError} validColor={handleValid}/>
            <ColorChanger color={backgroundColor}/>
        </>
    );
};

export default Hex2RGB;