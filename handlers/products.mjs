import product from "../models/product.mjs"

const products = async (req,res) => {

    const {company,name,featured,sort,select} = req.query
    const queryObject = {}

    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = {$regex: name,$options: "i"}
    }
    if (featured) {
        queryObject.featured = featured
    }

    let result = product.find(queryObject)

    if(sort){
        let sortFix = sort.split(",").join(" ")
        result = result.sort(sortFix)
    }
    if(select){
        let selectFix = select.split(",").join(" ")
        result = result.select(selectFix)
    }

    let page = Number(req.query.page) || 1
    let limit = Number(req.query.limit) || 10
    let skip = (page - 1) * limit   

    try {
        const Products = await result.skip(skip).limit(limit) 
        res.status(200).json({Products})
    } catch (error) {
        res.sendStatus(404)
    }
}
const productCheck = async (req,res) => {
    res.json({message: "products are yet checked"})
}
export {     
    products,
    productCheck,
}
