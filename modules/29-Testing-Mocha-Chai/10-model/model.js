const column1 = {
  title: 'Todo',
  tasks: ['task1', 'task2']
}

const column2 = {
  title: 'In Progress',
  tasks: ['task3', 'task4']
}

const state = {
  taskColumns: [column1, column2],
  members: {
    member1: {name: 'Gil Tayar'},
    member2: { name: 'Dima' },
    member3: { name: 'Alex' }
  },
  tasks: {
    task1: {
      title: 'Wash dishes',
      members: ['member1', 'member2']
    }
  }
}
