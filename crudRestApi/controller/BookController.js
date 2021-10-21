const { categories } = require('./CategoryController');

const books = [{
    "id": 1,
    "title": "Honorable",
    "description": "adipiscing elit proin interdum mauris non ligula pellentesque ultrices",
    "categoryId": 1,
    "author": "Orland MacColm",
    "createdDate": "3/31/2021"
}, {
    "id": 2,
    "title": "Dead Man",
    "description": "sociis natoque penatibus et magnis dis",
    "categoryId": 2,
    "author": "Sanford Celler",
    "createdDate": "9/7/2021"
}, {
    "id": 3,
    "title": "The Giant",
    "description": "augue vestibulum rutrum rutrum neque",
    "categoryId": 3,
    "author": "Cookie Lynnitt",
    "createdDate": "6/19/2021"
}];

let addBook = (req, res) => {
    const category = categories.find((category) => {
        return category.id == req.body.categoryId
    });

    if (!category) {
        return res.status(404).send("The category id is invalid!!!");
    };

    const book = {
        id: books.length + 1,
        title: req.body.title,
        description: req.body.description,
        categoryId: req.body.categoryId,
        author: req.body.author,
        createdDate: req.body.createdDate
    };
    books.push(book);
    res.send(book);
};


let viewBook = (req, res) => {
    res.send(books);
};

let viewSingleBook = (req, res) => {
    const book = books.find((c) => {
        return (c.id === parseInt(req.params.id));
    });

    if (!book) {
        res.status(404).send('The book for the given id is not found.');
    } else {
        res.send(book);
    };
};


let updateBook = (req, res) => {
    const book = books.find((c) => {
        return (c.id === parseInt(req.params.id));
    });

    if (!book) {
        res.status(404).send('The book for the given id is not found.');
    } else {
        book.title = req.body.title,
            book.description = req.body.description,
            book.categoryId = req.body.categoryId,
            book.author = req.body.author,
            book.createdDate = req.body.createdDate
        res.send(book);
    };
};


let deleteBook = (req, res) => {
    const book = books.find((c) => {
        return (c.id === parseInt(req.params.id));
    });

    if (!book) {
        res.status(404).send('The book for the given id is not found.');
    } else {
        const index = books.indexOf(book);
        books.splice(index, 1);
        res.send(book);
    };
};

module.exports = {
    addBook,
    viewBook,
    viewSingleBook,
    updateBook,
    deleteBook,
}