import React, {useState} from "react";
import PropsTypes from "prop-types";

const isValidHex = (hex) => /^#[\dA-F]{6}$/i.test(hex);

const rgbConverter = (hex) => {
    const r = parseInt(hex.substr(1, 2), 16);
    const g = parseInt(hex.substr(3, 2), 16);
    const b = parseInt(hex.substr(5, 2), 16);
    return [r, g, b];
};

const HexConverterForm = ({validColor, onError}) => {
    const [hex, setHex] = useState('');
    const [rgb, setRgb] = useState('');

    const handleHex2RGB = ({target}) => {
        const {value} = target;
        setHex(value);

        if (value.length >= 7) {
            if (isValidHex(value)) {
                const [r, g, b] = rgbConverter(value);
                setRgb(`rgb(${r}, ${g}, ${b})`);
                validColor(value);
            } else {
                setRgb('Error!')
                onError();
            }
        }
    };

    return (
        <form className="form">
            <input type="text" className="hex" value={hex} onChange={handleHex2RGB}/>
            <input type="text" className="rgb" value={rgb} readOnly/>
        </form>

    );
};

HexConverterForm.propTypes = {
    validColor: PropsTypes.func.isRequired,
    onError: PropsTypes.func.isRequired
}

export default HexConverterForm;