const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "..", "..", "db", "files", "showcaseData.json");

const getShowcaseDataModel = () => {
    try {
        const file = readFileSync(filePath, "utf-8");
        return JSON.parse(file);
    } catch (error) {
        console.log(error);
        throw new Error("Не получилось прочитать данные из файла showcaseData.json");
    }
    };

    const postShowcaseDataModel = (data) => {
    try {
        writeFileSync(filePath, data);
    } catch (error) {
        console.log(error);
        throw new Error("Не получилось записать данные в файл showcaseData.json");
    }
};

module.exports = { getShowcaseDataModel, postShowcaseDataModel };