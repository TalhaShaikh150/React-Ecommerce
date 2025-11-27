const express = require("express");
const PORT = 3000;
const products = require("./products.json");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(cors());

app.use(express.json());

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const searchedProduct = products.find(
    (item) => item.id === Number(productId)
  );
  res.send(searchedProduct);
});

//Post
app.post("/api/products", (req, res) => {
  const body = req.body;
  products.push({ ...body, id: products.length + 1 });
  fs.writeFile(
    path.join(__dirname, "./products.json"),
    JSON.stringify(products),
    (err, data) => {
      return res.json({ status: "Success", id: products.length });
    }
  );
});

app.listen(PORT, () => {
  console.log("Server is running");
});
