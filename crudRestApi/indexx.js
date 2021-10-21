// require('dotenv').config();
// const express = require('express');


// // const students = require('./students');
// const category = require('./routes/category');
// const book = require('./routes/book');


// const app = express();
// app.use(express.json());

// // CRUD

// // get all users, Request Method: Get
// app.get('/', (req, res) => {
//     res.json(category);
// });

// // create new user, Request Method: Post
// app.post('/category', (req, res) => {
//     category.push(req.body);
//     res.status(201).json(req.body);
// });

// // create user by id, Request Method Get
// app.put('/category:id')


// // app.post('/api/students', (req, res) => {

// //     if (!req.body.email) {
// //         res.status(400);
// //         return res.json({
// //             error: "Email is required..."
// //         });
// //     }

// //     // console.log(req.body);
// //     const user = {
// //         id: students.length + 1,
// //         first_name: req.body.first_name,
// //         last_name: req.body.last_name,
// //         email: req.body.email,
// //     }

// //     students.push(user);
// //     // res.send("students post request");
// //     res.json(user);
// // });

// // app.put('/api/students/:id', (req, res) => {
// //     let id = req.params.id;
// //     // console.log(id);
// //     // res.json(id);
// //     let first_name = req.body.first_name;
// //     let last_name = req.body.last_name;
// //     let email = req.body.email;

// //     let index = students.findIndex((student) => {
// //         return (student.id == Number.parseInt(id));
// //     });

// //     if (index >= 0) {
// //         let stud = students[index];
// //         stud.first_name = first_name;
// //         stud.last_name = last_name;
// //         stud.email = email;
// //         res.json(stud);
// //     } else {
// //         res.status(404);
// //         res.end();
// //     };
// // });

// // app.delete('/api/students/:id', (req, res) => {
// //     let id = req.params.id;

// //     let index = students.findIndex((student) => {
// //         return (student.id == Number.parseInt(id));
// //     });

// //     if (index >= 0) {
// //         let stud = students[index];
// //         students.splice(index, 1);
// //         res.json(stud);
// //     } else {
// //         res.status(404);
// //         res.end();
// //     };

// // });


// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


/*======= Demo =======*/

const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
];

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

// get all Courses
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// create New Courses
app.post('/api/courses', (req, res) => {

    // if (!req.body.name || req.body.length < 3) {
    //     // 400 Bad Request
    //     return res.send(400).send('Name required & should be minimum 3 chars...');
    // };

    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };
    courses.push(course);
    res.send(course);
});


// get a single Course
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find((c) => {
        return (c.id === parseInt(req.params.id));
    });

    if (!course) {
        res.status(404).send('The course for the given id is not found.');
    } else {
        res.send(course);
    }
});

// Update a Course
app.put('/api/courses/:id', (req, res) => {
    // Look up the course
    // if not existing, return 404

    // validate
    // if invalid, return 400 - Bad request

    // update course
    // return the updated course

    const course = courses.find((c) => {
        return (c.id === parseInt(req.params.id));
    });

    if (!course) {
        res.status(404).send('The course for the given id is not found.');
    } else {
        course.name = req.body.name;
        res.send(course);
    };
});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find((c) => {
        return (c.id === parseInt(req.params.id));
    });

    if (!course) {
        res.status(404).send('The course for the given id is not found.');
    } else {
        const index = courses.indexOf(course);
        courses.splice(index, 1);
        // courses.splice(course, 1);
        res.send(course);
    };
})



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});