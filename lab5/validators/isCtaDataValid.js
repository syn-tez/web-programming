const { isObjectHasProps } = require("./utils/validators");

const isCtaDataValid = (data) => {
    isObjectHasProps(data, ["text", "btnText"]);
};

module.exports = isCtaDataValid;