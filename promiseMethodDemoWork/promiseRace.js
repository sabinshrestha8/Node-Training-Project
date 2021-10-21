const request = require("request");

// Promise.race example
const dataOne = () => {
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

const dataTwo = () => {
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

Promise.race([dataOne(), dataTwo()])
    .then((result) => {
        console.log("Promise Race Result:", result);
    })
    .catch((err) => {
        console.log("Error:", err);
    });