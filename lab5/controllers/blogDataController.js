const isBlogDataValid = require("../validators/isBlogDataValid");

const {
    getBlogDataModel,
    postBlogDataModel,
    } = require("../model/files/blogDataModel");

    const getBlogData = (req, res, next) => {
    try {
        const data = getBlogDataModel();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    };

    const postBlogData = (req, res, next) => {
    try {
        const data = req.body;
        isBlogDataValid(data);
        postBlogDataModel(JSON.stringify(data));
        res.status(200).json({ message: "Данные блога успешно обновлены" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getBlogData, postBlogData };