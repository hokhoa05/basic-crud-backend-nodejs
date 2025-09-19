const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js")
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);


app.get('/', (req, res) => {
    res.send('Hello from Node Updated!')
});

mongoose.connect("mongodb+srv://admin:t1tCPAxEdsPNTQCl@backend-db.fnorrcn.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend-DB")
.then(() => {
    console.log("Connected to the database!");
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
})
.catch(() => {
    console.log("Connection failed!");
});