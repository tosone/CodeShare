var jwt = require('jsonwebtoken');
jwt.sign({ userid: "userid", activeString: "activeString" }, "sdfgd", function(token) {
    console.log(token)
})
console.log(jwt.verify(jwt.sign({ sdf: "sdf" }, "8541539655"), "8541539655"));

var a = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiI1NzBhNjkxMTZkZWRhNjAwMTJhZTY3ZjkiLCJhY3RpdmVTdHJpbmciOiJmOTk0MzY2YTBhZmM0YmFjOWE5MzUzYTBkMmMyMmQwZCIsImlhdCI6MTQ2MDMwMDA0OX0.jrilPqhaPpFP9EWqqUBBQYHf2tEx7YGnclTjVJ3MJKI"
console.log(jwt.verify(a,"8541539655"))
// console.log(jwt.verify("","8541539655"))
