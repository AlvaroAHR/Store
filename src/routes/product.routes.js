const { Router } = require("express");
const router = Router(); //localhost:3000/product /crear
const { Product, Category } = require("../db");


router.get("/", async (req, res) => {
  console.log("Peticion iniciada en la ruta");
  try {
    let allProducts = await Product.findAll({ include: { model: Category } });

    res.status(200).json(allProducts);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error buscando los productos");
  }
});

router.get("/:category", async (req, res) => {
  console.log("Peticion iniciada en la ruta");
  try {
    let {category} = req.params
    console.log(category);
    let allProducts = await Product.findAll({ include: { model: Category } });
    let filterProducts = allProducts.filter((prod)=> prod.Category.title === category)

    res.status(200).json(filterProducts);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error buscando los productos");
  }
});



router.post("/", async (req, res) => {
  try {
    let body = req.body;
    let category = await Category.findOne({ where: { title: body.category } });
    let newProduct = await Product.create(body.newProduct);
    await category.addProduct(newProduct);
    res.status(200).json("Producto creado correctamente");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/:id", (req, res) => {
  try {
    //1-Filtrar segun param de name
    let id = Number(req.params.id);

    let productFound = marketProducts.find((car) => car.id === id);
    console.log(productFound);
    res.status(202).json(productFound);
  } catch (error) {
    console.log(error);
    res.status(400).json("Error en la ejecucion de bucar por id");
  }
});

router.post("/crear", (req, res) => {
  try {
    let body = req.body;

    console.log(body.newProduct);

    res.status(200).json("producto creado correctamente"); //al body de nuestro cliente
  } catch (error) {
    res.status(400).send("Error en crear producto");
  }
});

router.patch("/", (req, res) => {
  console.log("entrada a la ruta patch"); //se va a la consola
  res.send("Hello PATCH!"); //al body de nuestro cliente
});

module.exports = router;
