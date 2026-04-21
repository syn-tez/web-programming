const isShowcaseDataValid = require("../validators/isShowcaseDataValid");

const {
    getShowcaseDataModel,
    postShowcaseDataModel,
    } = require("../model/files/showcaseDataModel");

    const getShowcaseData = (req, res, next) => {
    try {
        const data = getShowcaseDataModel();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    };

    const postShowcaseData = (req, res, next) => {
    try {
        const data = req.body;
        isShowcaseDataValid(data);
        postShowcaseDataModel(JSON.stringify(data));
        res.status(200).json({ message: "Данные Showcase успешно обновлены" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getShowcaseData, postShowcaseData };