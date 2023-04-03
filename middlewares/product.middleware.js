export function productMiddleware(req,res,next){
    let name = req.body.name;
    let stock = req.body.stock;
    let price = req.body.price;


    if(!name){
        res.send("productName is required !")
    }
    if(!stock){
        res.send("stock is required")
    }
    
    
    if(!price){
        res.send("price is required")
    }

    if(isNaN(price)){
        res.send("Not a number")
    }
    next()

}