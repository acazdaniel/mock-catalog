exports.get = (req, res, next) => {
    let _ = require('../model/results');
    let person = function (index) {
        var response = {
                        "q": "Samsung Galaxy S8", 
                          "paging": {
                            "total": 5, 
                            "offset": index, 
                            "limit": 2
                           }
                       };
        var startIndex = parseInt(index) - 1;
        var endIndex = parseInt(index) + 1;
        response.results = _.results.slice(startIndex, endIndex);
        return response;
    }
    if(req.query.offset) {
        res.status(201).send(person(req.query.offset));
    } else {
        res.status(201).send(person(1));
    }
}