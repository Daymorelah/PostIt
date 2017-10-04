
module.exports = {
  up: (queryInterface) =>{
    return queryInterface.bulkInsert('Users', [{
      username: 'John Doe',
      password: 'johnDoe',
      email: 'johndoe@naiajamail.com',
      createdAt: '2017-10-01 11:01:29.994+00',
      updatedAt: '2017-10-01 11:01:29.994+00',
    },{
      username: 'Jane Doe',
      password: 'janeDoe',
      email: 'janedoe@naiajamail.com',
      createdAt: '2017-10-01 11:03:29.994+00',
      updatedAt: '2017-10-01 11:03:29.994+00',
    },{
      username: 'Moby Dick',
      password: 'mobyDick',
      email: 'mobyDick@naiajamail.com',
      createdAt: '2017-10-01 11:07:29.994+00',
      updatedAt: '2017-10-01 11:07:29.994+00',
    }
    
    ], {});
  },

  down: function (queryInterface) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
