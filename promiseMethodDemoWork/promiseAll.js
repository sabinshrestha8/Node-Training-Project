const request = require("request");

// Promise all example
const promiseOne = () => {
    return new Promise((resolve, reject) => {
        request("https://reqres.in/api/users", (error, response, body) => {
            if (error) {
                reject(error);
            }
            resolve({
                "version": "v1",
                "data": body,
            });
        })
    });
};

const promiseTwo = () => {
    return new Promise((resolve, reject) => {
        request("https://reqres.in/api/users", (error, response, body) => {
            if (error) {
                reject(error);
            }
            resolve({
                "version": "v2",
                "data": body,
            });
        })
    });
};

Promise.all([promiseOne(), promiseTwo()])
    .then((result) => {
        console.log("Promise all Result:", result);
    })
    .catch((err) => {
        console.log("Error:", err);
    });
