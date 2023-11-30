import express from "express"
const router = express.Router()
import { products,productCheck} from "../handlers/products.mjs"

router.route("/").get(products)
router.route("/check").get(productCheck)

export default router