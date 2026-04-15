const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "..", "..", "db", "files", "blogData.json");

const getBlogDataModel = () => {
    try {
        const file = readFileSync(filePath, "utf-8");
        return JSON.parse(file);
    } catch (error) {
        console.log(error);
        throw new Error("Не получилось прочитать данные из файла blogData.json");
    }
    };

    const postBlogDataModel = (data) => {
    try {
        writeFileSync(filePath, data);
    } catch (error) {
        console.log(error);
        throw new Error("Не получилось записать данные в файл blogData.json");
    }
};

module.exports = { getBlogDataModel, postBlogDataModel };