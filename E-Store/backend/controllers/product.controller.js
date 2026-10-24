import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, image } = req.body;
  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields" });
  }
  const product = new Product({ name, price, image });
  await product
    .save()
    .then((savedProduct) => {
      res.status(201).json(savedProduct);
    })
    .catch((error) => {
      res.status(500).json({ message: "Error saving product", error });
    });
};


export const updateProduct = async (req, res) => {
  const { name, price, image } = req.body;
  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields" });
  }
  const product = new Product({ name, price, image });
  await product
    .save()
    .then((savedProduct) => {
      res.status(201).json(savedProduct);
    })
    .catch((error) => {
      res.status(500).json({ message: "Error saving product", error });
    });
};


export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
}