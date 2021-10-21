const categories = [{
    "id": 1,
    "title": "Romance",
    "createdDate": "9/9/2021"
}, {
    "id": 2,
    "title": "Horror",
    "createdDate": "4/13/2021"
}, {
    "id": 3,
    "title": "Mystery",
    "createdDate": "8/3/2021"
}];


let createCategory = (req, res) => {

    const category = {
        id: categories.length + 1,
        title: req.body.title,
        createdDate: req.body.createdDate
    };
    categories.push(category);
    res.send(category);
};


let viewCategory = (req, res) => {
    res.send(categories);
};

let viewSingleCategory = (req, res) => {
    const category = categories.find((c) => {
        return (c.id === parseInt(req.params.id));
    });

    if (!category) {
        res.status(404).send('The category for the given id is not found.');
    } else {
        res.send(category);
    };
};


let updateCategory = (req, res) => {
    const category = categories.find((c) => {
        return (c.id === parseInt(req.params.id));
    });

    if (!category) {
        res.status(404).send('The category for the given id is not found.');
    } else {

        category.title = req.body.title,
            category.createdDate = req.body.createdDate
        res.send(category);
    };
};


let deleteCategory = (req, res) => {
    const category = categories.find((c) => {
        return (c.id === parseInt(req.params.id));
    });

    if (!category) {
        res.status(404).send('The category for the given id is not found.');
    } else {
        const index = categories.indexOf(category);
        categories.splice(index, 1);
        res.send(category);
    };
};

module.exports = {
    createCategory,
    viewCategory,
    viewSingleCategory,
    updateCategory,
    deleteCategory,
    categories,
}