exports.get = (req, res, next) => {
    let _ = require('../model/itemsResults');
    let items = function () {
        return _.results;
    }
    res.status(200).send(items());
}