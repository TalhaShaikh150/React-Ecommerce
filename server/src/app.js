const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

const products = require("./products.json");

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const productId = Number(req.params.id);
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

app.post("/api/products", async (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push({ ...newProduct, id: products.length + 1 });

  fs.writeFile(
    path.join(__dirname, "./products.json"),
    JSON.stringify(products, null, 2),
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return res.status(500).json({ message: "Failed to save product" });
      }

      res.status(201).json({ status: "Success", product: newProduct });
    }
  );
});

//For Deleting Product

app.delete("/api/products/:id", (req, res) => {
  const productId = Number(req.params.id);
  const index = products.findIndex((item) => item.id === productId);
  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  const deletedProduct = products.splice(index, 1)[0];

  fs.writeFile(
    path.join(__dirname, "./products.json"),
    JSON.stringify(products, null, 2)
  );
  res.send({ message: "Product", deletedProduct });
});

app.put("/api/products/:id", (req, res) => {
  const productId = Number(req.params.id);
  const updatedProduct = req.body;

  const index = products.findIndex((item) => item.id === productId);
  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  products[index] = { ...products[index], ...updatedProduct };

  fs.writeFile(
    path.join(__dirname, "./products.json"),
    JSON.stringify(products, null, 2),
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return res.status(500).json({ message: "Failed to update file" });
      }

      // Only send response after file is successfully written
      res.json({ message: "Product updated", product: products[index] });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
