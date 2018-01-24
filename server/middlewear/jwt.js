import jwt from 'jsonwebtoken';

const secrete = process.env.SECRETE;

export default {
  checkToken (req,res,next){
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(!token){
      return res.status(401).send({message: 'User not auhorized'});
    }else{
      jwt.verify(token, secrete, (err,decoded)=>{
        if (err){
          return res.status(401).send({message:'Token Authentication failed'});
        }else{
          req.decoded = decoded;
          next();
        } //end of else statement
      }); //end of verification
    }//end of else statement
  }//end of check token
}; //end of export default