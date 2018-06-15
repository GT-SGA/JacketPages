const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combine"));
app.use(bodyParser.json());
app.use(cors());

app.get("/bills", (req, res) => {
    res.send({
            data: [
        { data1: "hello", data2: "world"},
        { data1: "hello", data2: "world"},
        { data1: "hello", data2: "world"},
        { data1: "hello", data2: "world"},
        { data1: "hello", data2: "world"}
    ]});
});
app.listen(process.env.PORT || 8081);
