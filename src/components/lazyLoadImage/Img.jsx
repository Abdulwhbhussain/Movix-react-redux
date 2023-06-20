import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className }) => {
    return (
        <LazyLoadImage
            className={className || ""}
            alt=""
            effect="blur"
            src={src}
        />
    );
};

Img.defaultProps = {
    src: "",
    className: "",
};

Img.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
};

export default Img;