
import models from '../models';

const groupModel = models.groups;
const userModel = models.users;
const groupUsersModel = models.groupUsers;
const messageModel = models.messages;

export default {
  //Create a group in the app
  createGroup(req, res) {
    return groupModel
      .create({
        groupName: req.body.groupName,
        discription: req.body.discription,
      })
      .then((data) => {
        res.status(201).send({
          message:`Group ${data.groupName} created sucesfully`
        }); //end of send method
      })
      .catch(error => res.status(400).send(error.message));
  },

  //add a user to  a group
  addUser(req, res) {
    const groupid = req.params.groupid;
    const userIdToAdd = req.body.id;

    return groupModel.findById(groupid)
      .then((data) => {
        if (!data) {
          return res.status(404).send({message: 'Group does not exists'});
        }else{
          return groupUsersModel.create({
            userId: userIdToAdd,
            groupId: req.params.groupid,
          })
          .then(() => { 
            res.send({ 
              message: 'User successfully added to the group' 
            });
          }).catch(error => res.status(400).send(error.message));
        } //end of else statement
      }).catch(error => res.status(400).send(error.message)); 
  },

  //List groups in the database with users that belong to a group
  listUsers(req, res) {
    return groupModel.all({
      attributes:['groupName', 'discription'],
      include: [{
        model: userModel,
        as: 'groupMembers',
        attributes: ['username','email'],
      }]
    })
    .then(data => res.status(201).send(data))
    .catch(error => res.status(404).send(error.message));
  }, //end of listUsers function definition

  //List all messages belonging to a group
  groupMessages(req, res){
    return groupModel.findOne({
      where: {
        id: req.params.groupid
      },
      attributes: ['groupName', 'discription'],
      include:[{
        model: messageModel,
        //as: 'messagesForThisGroup'
      }]
    })
    .then( (group) => {
      if(!group){
        res.status(404).send({message: 'Group not found!'});
      }else{
        return res.status(200).send(group);
      } //end of else statement
    }).catch( (error) =>{ res.status(404).send(error.message); });
  }, //end of group messages function definition
}; //end of export default
