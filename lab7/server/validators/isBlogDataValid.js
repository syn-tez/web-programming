const { isObjectHasProps, isArrayHasLength } = require("./utils/validators");

const isBlogDataValid = (data) => {
    isObjectHasProps(data, ["header", "articles"]);

    if (!isArrayHasLength(data.articles)) {
        throw new Error("Массив статей блога пуст или не является массивом");
    }

    data.articles.forEach((article) => {
        isObjectHasProps(article, ["image", "date", "title", "linkText"]);
    });
};

module.exports = isBlogDataValid;