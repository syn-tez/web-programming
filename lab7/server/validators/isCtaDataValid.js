const { isObjectHasProps } = require("./utils/validators");

const isCtaDataValid = (data) => {
    isObjectHasProps(data, ["header", "content", "buttonTitle"]);
};

module.exports = isCtaDataValid;