
module.exports = {
  up: (queryInterface) =>{
    return queryInterface.bulkInsert('Groups', [{
      groupName: 'Family',
      discription: 'Family memebers',
      createdAt: '2017-10-01 11:04:29.994+00',
      updatedAt: '2017-10-01 11:04:29.994+00',
    },{
      groupName: 'Church',
      discription: 'Church memebers',
      createdAt: '2017-10-01 11:05:29.994+00',
      updatedAt: '2017-10-01 11:05:29.994+00',
    },{
      groupName: 'Project',
      discription: 'Project memebers',
      createdAt: '2017-10-01 11:07:29.994+00',
      updatedAt: '2017-10-01 11:07:29.994+00',
    }], {});
  },

  down: (queryInterface) =>{
    return queryInterface.bulkDelete('Groups', null, {});
  }
};
