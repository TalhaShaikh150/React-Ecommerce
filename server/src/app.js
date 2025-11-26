const express = require("express");
const PORT = 3000;
const products = require("./products.json");
const cors = require("cors");
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

app.listen(PORT, () => {
  console.log("Server is running");
});
