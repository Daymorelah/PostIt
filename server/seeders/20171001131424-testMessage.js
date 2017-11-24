
module.exports = {
  up: (queryInterface) =>{
    return queryInterface.bulkInsert('Messages', [{
      body: 'Clean the toilet by 9 a.m',
      priority: 'Normal',
      groupId: 3,
      createdAt: '2017-10-01 11:03:29.994+00',
      updatedAt: '2017-10-01 11:03:29.994+00',
    },{
      body: 'Do homework at 4 p.m',
      priority: 'Urgent',
      groupId: 2,
      createdAt: '2017-10-01 11:04:29.994+00',
      updatedAt: '2017-10-01 11:04:29.994+00',
    },{
      body: 'Go for taekwondo practise by 5 p.m',
      priority: 'Critical',
      groupId: 1,
      createdAt: '2017-10-01 11:05:29.994+00',
      updatedAt: '2017-10-01 11:05:29.994+00',
    },{
      body: 'Gocerry shopping by 3 p.m ',
      priority: 'Urgent',
      groupId: 2,
      createdAt: '2017-10-01 11:06:29.994+00',
      updatedAt: '2017-10-01 11:06:29.994+00',
    },{
      body: 'Go for evening service by 7 p.m',
      priority: 'Critical',
      groupId: 1,
      createdAt: '2017-10-01 11:07:29.994+00',
      updatedAt: '2017-10-01 11:07:29.994+00',
    },{
      body: 'Choir pactise at 8 p.m',
      priority: 'Urgent',
      groupId: 3,
      createdAt: '2017-10-01 11:07:29.994+00',
      updatedAt: '2017-10-01 11:07:29.994+00',
    },
    // {
    //   body: 'John Doe',
    //   priority: false,
    //   groupId: 3,
    // },{
    //   body: 'John Doe',
    //   priority: false,
    //   groupId: 3,
    // },{
    //   body: 'John Doe',
    //   priority: false,
    //   groupId: 3},
    ], {});
  
  },

  down: (queryInterface) =>{
    return queryInterface.bulkDelete('Messages', null, {});
  }
};
