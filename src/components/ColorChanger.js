import React from "react";
import PropsTypes from "prop-types";

const ColorChanger = ({color}) => {
    return <div className="color-changer" style={{backgroundColor: color}}></div>;
};

ColorChanger.propTypes = {
    color: PropsTypes.string.isRequired
};

export default ColorChanger;
