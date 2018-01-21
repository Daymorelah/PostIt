
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import models from '../models';

require ('dotenv').config();

const secrete = process.env.SECRETE;
const userModel = models.User;
const groupModel = models.Group;

export default {
  //sign up a new user to use the app
  signup(req, res) {
    return userModel.findOne({
      where: {
        username: req.body.username,
      },
    })
      .then( (userName) => {
        if (userName) {
          res.status(201).send({message: 'Username already exist' });
        } 
        else {
          return userModel
            .create({
              username: req.body.username,
              password: req.body.password,
              email: req.body.email,
            })
            .then( (data) => {
              const token = jwt.sign({
                userId: data.id,
                username: data.username,
                email: data.email
              }, secrete, {expiresIn: '1 day'});
              res.status(201).send({
                token,
                message:`User ${data.username} created successfully`
              }); //end of send method
            })
            .catch(error => res.status(400).send(error.message));
        } //end of else statement
      }).catch(error => res.status(400).send(error.message)); //end of then method
  },  //end of signUp function definition

  //log a user into the app
  login(req, res) {
    return userModel.findOne({
      where: { username: req.body.username
      }
    }).then( (user) =>{
      if(!user){
        res.status(201).send({message:'Username or Password does not exist'});
      }else if( ! user.verifyPassword(req.body.password) ){
        res.status(201).send({message:'Username or Password does not exist'});
      } //end of else if statement
      else{
        const token = jwt.sign({
          userId: user.id,
          username: user.username,
          email: user.email
        }, secrete, {expiresIn: '1 day'});
        return res.status(200).send({token, message:'Login successful'});
      } //end of else statement
    }).catch(error => res.status(404).send(error.message));
  }, //end of login user method

  //List users in the database.
  list(req, res) {
    return userModel.all({attributes:['username','email'],
      include:[{
        model: groupModel,
        as: 'groupsForThisUser',
        attributes: ['groupName', 'discription'],
      }]
    })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(404).send(error.message));
  }, //end of list method

};
