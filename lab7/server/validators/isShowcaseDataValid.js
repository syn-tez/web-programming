const { isObjectHasProps } = require("./utils/validators");

const isShowcaseDataValid = (data) => {
    isObjectHasProps(data, ["illustration", "eyebrow", "title", "description", "bottomCta"]);

    isObjectHasProps(data.illustration, ["src", "alt"]);
};

module.exports = isShowcaseDataValid;