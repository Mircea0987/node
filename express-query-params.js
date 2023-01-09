const express = require("express");
const { find } = require("lodash");
const { products, people } = require("./data");
const app = express();

app.get("/", (req, res) => {
  res.send(
    '<h1> Home Pageeee</h1><a href="/api/products">products</a> \
     <script>console.log(navigator);</script>'
  );
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});
app.get("/api/products/:productId", (req, res) => {
  const singleProduct = products.find(
    (product) => product.id == Number(req.params.productId)
  );
  if (!singleProduct) {
    res.status(404).send("<h1>Product does not exist</h1>");
  }
  res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  let sortedProducts = [...products];
  const { search, limit } = req.query;

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  return res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server is listening to port 5000");
});
