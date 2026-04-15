const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "..", "..", "db", "files", "footerData.json");

const getFooterDataModel = () => {
    try {
        const file = readFileSync(filePath, "utf-8");
        return JSON.parse(file);
    } catch (error) {
        console.log(error);
        throw new Error("Не получилось прочитать данные из файла footerData.json");
    }
    };

    const postFooterDataModel = (data) => {
    try {
        writeFileSync(filePath, data);
    } catch (error) {
        console.log(error);
        throw new Error("Не получилось записать данные в файл footerData.json");
    }
};

module.exports = { getFooterDataModel, postFooterDataModel };