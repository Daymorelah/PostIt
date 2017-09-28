import models from '../models';

const messageModel = models.messages;
const groupModel = models.groups;

export default {
  //send messages to a group
  sendMessage(req, res){
    return groupModel.findById(req.params.groupid)
    .then( (group) =>{
      if(!group){
        res.status(400).send({message:'Group not found!'});
      }else{
        return messageModel.create({
          messageBody: req.body.message,
          groupId: req.params.groupid,
          messageAuthor: req.body.author,
        }).then( (message) => {
          res.status(200).send({
            message: `Message sent to group ${message.groupId} succesfully`
          }); //ens of send method
        }).catch( error => res.status(400).send(error.message));
      } //end of else statement
    }).catch( error => res.status(400).send(error.message));
  }, //end of send message function defintion

  //List all messages from the database
  getMessages(req, res){
    return messageModel.all({
      attributes: ['messageBody', 'messageAuthor'],
      include:[{
        model: groupModel,
        as: 'group',
        attributes: ['groupName'],
      }]
    }).then( (messages) =>{
      res.status(200).send(messages);
    }).catch( error => res.status(400).send(error.message));
  } //end of getMessages function definition

}; //end of export default
