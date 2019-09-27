exports.get = (req, res, next) => {
    let _ = require('../model/itemResults');
    let items = function (index) {
        
        var response = {
                        "seller_id": "123456789",
                        "query": null,
                        "paging": {
                            "limit": 2,
                            "offset": 0,
                            "total": 8
                            },
                        "filters": [],
                        "available_filters": [],
                        "orders": [],
                        "available_orders": []
                       };

        var startIndex = parseInt(index) - 1;
        var endIndex = parseInt(index) + 10;
        response.results = _.results.slice(startIndex, endIndex);
        return response;
    }
    if(req.query.offset) {
        res.status(201).send(items(req.query.offset));
    } else {
        res.status(201).send(items(1));
    }
}