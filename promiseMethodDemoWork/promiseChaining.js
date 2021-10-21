const request = require("request");

// Promise Method chaining
const getApiOne = () => {
    return new Promise((resolve, reject) => {
        request("https://reqres.in/api/users", (error, response, body) => {
            if (!error) {
                // console.log(body);
                resolve(body);
            }
            reject(error);
        });
    });
};

const getApiTwo = (body) => {
    return new Promise((resolve, reject) => {
        if (!body) {
            reject("no body found");
        }
        const bodyObj = JSON.parse(body);
        // console.log(body.data);
        resolve(bodyObj.data)
    });
};

getApiOne()
    .then((result) => {
        return getApiTwo(result);
    })
    .then((data) => {
        // console.log(data);
        data.forEach(userData => {
            console.log(userData);
        });
    })
    .catch((err) => {
        console.log("Error:", err);
    })
