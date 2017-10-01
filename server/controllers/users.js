
import bcrypt from 'bcrypt';
import models from '../models';

const salt = 10;
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
          res.status(400).send({message: 'Username already exist' });
        } else {
          return userModel
            .create({
              username: req.body.username,
              password: bcrypt.hashSync(req.body.password,salt),
              email: req.body.email,
            })
            .then( (data) => {
              res.status(201).send({
                message:`User ${data.username} created successfully`
              }); //end of send method
            })
            .catch(error => res.status(400).send(error.message));
        } //end of else statement
      }); //end of then method
  },  //end of signUp function definition

  //log a user into the app
  login(req, res) {
    return userModel.findOne({
      where: { username: req.body.username
      }
    }).then( (user) =>{
      if(!user){
        res.status(400).send({message:'Username or Password does not exist'});
      }else if( !(bcrypt.compareSync(req.body.password, user.password)) ){
        res.status(400).send({message:'Username or Password does not exist'});
      } //end of else if statement
      else{
        res.status(200).send({message:'Login successful'});
      } //end of else statement
    }).catch(error => res.status(404).send(error.message));
  },

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
  },
};
