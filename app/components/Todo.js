// app/components/Todo.js

'use client';

import { useState } from 'react';
import styles from './Todo.module.css';

const Todo = () => {
  const [task, setTask] = useState(''); // Track new task input
  const [tasks, setTasks] = useState([]); // Track the list of tasks

  // Handle adding a task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(''); // Clear input after adding task
    }
  };

  // Handle removing a task
  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.todoContainer}>
      <h1 className={styles.todoTitle}>To-Do List</h1> {/* Apply local class */}
      <form onSubmit={handleAddTask} className={styles.todoForm}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className={styles.inputField}
          placeholder="Add a new task"
        />
        <button type="submit" className={styles.addButton}>
          Add
        </button>
      </form>

      <ul className={styles.todoList}>
        {tasks.map((task, index) => (
          <li key={index} className={styles.todoItem}>
            <span>{task}</span>
            <button
              onClick={() => handleRemoveTask(index)}
              className={styles.removeButton}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
