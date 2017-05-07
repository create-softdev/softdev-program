const column1 = {
  id: 'c1',
  title: 'Todo',
  tasks: ['task1', 'task2']
}

const column2 = {
  id: 'c2',
  title: 'In Progress',
  tasks: ['task3', 'task4']
}

const model = {
  taskColumns: [column1, column2],
  members: [
    {id: 'member1', name: 'Gil Tayar'},
    {id: 'member2', name: 'Dima'},
    {id: 'member3', name: 'Alex'}
  ],
  tasks: {
    task1: {
      title: 'Wash dishes',
      members: ['member1', 'member2']
    },
    task2: {
      title: 'Clean Kitchen',
      members: ['member1', 'member2']
    }
  }
}

module.exports = {
  model
}
