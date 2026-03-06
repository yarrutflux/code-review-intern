import { useState, useEffect, useRef } from "react";

const initialTasks = [
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Walk the dog", completed: true },
    { id: 3, text: "Call dentist", completed: false },
    { id: 4, text: "Finish report", completed: true },
    { id: 5, text: "Water plants", completed: false }
  ];

  function TodoItem({ task, onToggle, onDelete }: {
  task: { id: number; text: string; completed: boolean };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <li  style={{ marginBottom: "12px" }}>
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text}
      </span>
       {" "}
      <button onClick={() => onToggle(task.id)}>
        {task.completed ? "Undo" : "Done"}
      </button>
       {" "}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}

  export default function Todo() {

    const [tasks, setTasks] = useState(initialTasks);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const remaining = tasks.filter((task) => !task.completed).length;

  function handleAdd() {
    const text = inputValue.trim();
    if (!text) return;

    const newTask = { id: Date.now(), text: text, completed: false };
    setTasks([...tasks, newTask]);
    setInputValue("");

    inputRef.current?.focus();
  }

  function handleToggle(id:number) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  function handleDelete(id:number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

    return (
      <div>
        <h1>Todo App</h1>
      <p>{remaining} task{remaining !== 1 ? "s" : ""} remaining</p>

      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          />
           {" "}
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      </div>
    );
  }
  