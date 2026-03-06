# Task — "Mini Todo App with Components"

Build a Todo app in React that displays tasks, allows adding, toggling, and deleting tasks. Each task must be its own component. The app should maintain state, handle input focus, and react to changes in the task list.

[View the User Overview Card](http://localhost:5173/todo)
[Implementation](app/routes/todo.tsx)

## Data / Starting Point

```javascript
const initialTasks = [
  { id: 1, text: "Buy groceries", completed: false },
  { id: 2, text: "Walk the dog", completed: true },
  { id: 3, text: "Call dentist", completed: false },
  { id: 4, text: "Finish report", completed: true },
  { id: 5, text: "Water plants", completed: false }
];
```

## Expected Features / Output

- Display all tasks, each task as a separate **TodoItem** component
- Input field + button to add new tasks
- Button to toggle TodoItem
- Show number of remaining tasks (e.g., "2 tasks remaining")
- Autofocus input on mount and after adding a task
- Toggling a task or deleting a task should update state in the parent component
