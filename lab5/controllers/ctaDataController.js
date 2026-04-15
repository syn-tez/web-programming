const isCtaDataValid = require("../validators/isCtaDataValid");

const {
    getCtaDataModel,
    postCtaDataModel,
    } = require("../model/files/ctaDataModel");

    const getCtaData = (req, res, next) => {
    try {
        const data = getCtaDataModel();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    };

    const postCtaData = (req, res, next) => {
    try {
        const data = req.body;
        isCtaDataValid(data);
        postCtaDataModel(JSON.stringify(data));
        res.status(200).json({ message: "Данные CTA успешно обновлены" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getCtaData, postCtaData };