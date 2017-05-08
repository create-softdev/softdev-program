const column1 = {
  id: 'c1',
  title: 'Todo',
  tasks: [{
    id: 'task1',
    title: 'Wash dishes',
    members: ['member1', 'member2']
  },
  {
    id: 'task2',
    title: 'Do ךaundry',
    members: ['member3']
  }]
}

const column2 = {
  id: 'c2',
  title: 'In Progress',
  tasks: []
}

const model = {
  taskColumns: [column1, column2],
  members: [
    {id: 'member1', name: 'Gil Tayar'},
    {id: 'member2', name: 'Dima'},
    {id: 'member3', name: 'Alex'}
  ]
}

module.exports = model
