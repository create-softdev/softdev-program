# Model

* Example Model

```js
const state = {
  taskColumns: [
    {
      id: 'column1',
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
    },
    {
      id: 'column2',
      title: 'In Progress',
      tasks: []
    }
  ],
  members: [
    {id: 'member1', name: 'Gil Tayar'},
    {id: 'member2', name: 'Dima' },
    {id: 'member3', name: 'Alex' }
  ]
}
```
