const { isObjectHasProps, isArrayHasLength } = require("./utils/validators");

const isFooterDataValid = (data) => {
    isObjectHasProps(data, ["logo", "links", "company", "getInTouch", "copyright"]);

    isObjectHasProps(data.logo, ["src", "alt", "address"]);

    if (!isArrayHasLength(data.links) || !isArrayHasLength(data.company) || !isArrayHasLength(data.getInTouch)) {
        throw new Error("Один из списков ссылок в футере пуст или не является массивом");
    }
};

module.exports = isFooterDataValid;