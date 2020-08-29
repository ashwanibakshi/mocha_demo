const userModel = require('../model/userModel'); 
const express   = require('express');

const router = express.Router();

// const x = [{
//     username:'demo',
//     email:'demo@a.com',
//     password:'123456'
// }];

router.get('/addUser',(req,res)=>{
   userModel.find((err,data)=>{
      if(err){
          res.status(404);
      }else{
      res.status(200).json(data);
      }
   });
});

router.post('/addUser',(req,res)=>{
    console.log('working',req.body);
    const user = new userModel({
        username:req.body.username,
        email:req.body.email,
        password:req.body.email
    });
    user.save((err,data)=>{
       if(err){
           res.status(404);
       }else{
       res.status(200).json(data);
       }
    });
});

module.exports = router;