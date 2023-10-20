const { Router } = require("express");
const router = Router();
const productRoutes = require("./product.routes");
const categoryRoutes = require("./category.routes")

/* GET DE EJEMPLO  localhost:3000/   */ 


/*definimos los endpoints en secciones */
router.use("/product", productRoutes);
router.use("/category", categoryRoutes)

module.exports = router;
