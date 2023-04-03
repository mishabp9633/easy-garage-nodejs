import jwt from "jsonwebtoken";
import { getUserById } from "../services/user.service.js";

export function userDataMiddleware(req,res,next){
    let name = req.body.name;
    let phone = req.body.phone;
    let email= req.body.email;

    if(!name){
        res.send("Name is required !!!")
    }
    if(!phone){
        res.send("Phone is required")
    }
    if(isNaN(phone)){
        res.send("Phone is not a number")
    }
    if(!email){
        res.send("email is required")
    }
    next()

}

export async function adminMiddleware (req,res,next) {
    const token = req.header('Authorization') && req.header('Authorization').split('Bearer ')[1] || null;
    // console.log('token: ',token);
    if (!token){
        res.send('Access Denied!')
    } else {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        // console.log('decoded: ',decoded._id);
        if(!decoded || !decoded._id) {
            res.send('Access Denied!'); 
        } 
        else {
            const user = await getUserById(decoded._id);
            if(user.role != 'admin') return res.send('Not an admin. Access Denied!')
            req.body.user = user;
        }
    }
    next()
}

export async function userMiddleware (req,res,next) {
    const token = req.header('Authorization') && req.header('Authorization').split('Bearer ')[1] || null;
    // console.log('token: ',token);
    if (!token){
        res.send('Access Denied!')
    } else {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if(!decoded._id) {
            res.send('Access Denied!'); 
        } 
        else {
            const user = await getUserById(decoded._id);
            console.log(user);

            req.body.user = user;
        }
    }
    next()
}