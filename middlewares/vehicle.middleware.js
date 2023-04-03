export function vehicleMiddleware(req,res,next){
    let model = req.body.model;
    let companyName = req.body.companyName;
    let registrationNumber = req.body.registrationNumber;
    let manufacturingYear = req.body.manufacturingYear;



    if(!model){
        res.send("vehicleModel is required !")
    }
    if(!companyName){
        res.send("companyName is required")
    }
    if(!registrationNumber){
        res.send("registrationNumber is required")
    }
    if(!manufacturingYear){
        res.send("manufacturingyear is required")
    }
    
    next()

}