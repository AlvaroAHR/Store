const { Router } = require("express");
const router = Router(); //localhost:3000/category
const { Category } = require("../db");

router.get("/", async (req, res) => {
  try {
    let allCategories = await Category.findAll();

    res.status(200).json(allCategories);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error buscando los productos");
  }
});

router.post("/", async (req, res) => {
  try {
    let newCategory = req.body; // {title:"string"}
    await Category.create(newCategory);
    res.status(200).json("Categoria creada correctamente");
  } catch (error) {
    res.status(400).send("Error al crear la categoria");
  }
});

module.exports = router;
