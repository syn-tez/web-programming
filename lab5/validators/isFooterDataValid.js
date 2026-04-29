const { isObjectHasProps, isArrayHasLength } = require("./utils/validators");

const isFooterDataValid = (data) => {
    isObjectHasProps(data, ["mainHeader", "mainButtonTitle", "logo", "brandInfo", "linksCol", "companyCol", "contactsCol"]);

    isObjectHasProps(data.logo, ["src", "alt"]);
    isObjectHasProps(data.brandInfo, ["address", "rights"]);

    const columns = ["linksCol", "companyCol", "contactsCol"];
    
    columns.forEach((columnName) => {
        const column = data[columnName];
        
        isObjectHasProps(column, ["title", "items"]);

        if (!isArrayHasLength(column.items)) {
            throw new Error("Список ссылок в футере пуст или не является массивом");
        }
    });
};

module.exports = isFooterDataValid;