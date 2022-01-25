"use strict";
exports.__esModule = true;
var AWS = require("aws-sdk");
var s3 = new AWS.S3();
s3.listBuckets(function (err, data) {
    if (err)
        throw err;
    console.log(data);
});
