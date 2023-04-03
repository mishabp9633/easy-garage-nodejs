export function staffMiddleware(req,res,next){
    let name = req.body.name;
    let phone = req.body.phone;
    let email = req.body.email;


    if(!name){
        res.send("Name is required !")
    }
    if(!phone){
        res.send("Phone is required")
    }
   
    if(!email){
        res.send("email is required")
    }
    next()

}