import { useState, useEffect } from "react";
import { TodoContext } from "./TodoContext";

export function TodoContextProvider({ children }) {
  const [allTasks, setAllTasks] = useState([]); // النسخة الكاملة من المهام
  const [tasks, setTasks] = useState([]); // النسخة المعروضة بس
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      const parsed = JSON.parse(storedTasks);
      setAllTasks(parsed);
      setTasks(parsed);
    }
  }, []);

  function addTask(newTask) {
    if (!newTask.trim()) {
      setModal(true);
      return;
    }
    const addedTask = [
      ...allTasks,
      { title: newTask.trim(), completed: false, id: Date.now() },
    ];
    localStorage.setItem("tasks", JSON.stringify(addedTask));
    setAllTasks(addedTask);
    setTasks(addedTask);
  }

  function deleteTask(id) {
    const updated = allTasks.filter((t) => t.id !== id);
    setAllTasks(updated);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  }

  function toggleTask(id) {
    const updated = allTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setAllTasks(updated);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  }

  function updateTask(id, newTitle) {
    const updated = allTasks.map((task) =>
      task.id === id ? { ...task, title: newTitle } : task
    );
    setAllTasks(updated);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  }

  function filterTodos(filterType) {
    if (filterType === "all") {
      setTasks(allTasks);
    } else if (filterType === "completed") {
      setTasks(allTasks.filter((t) => t.completed));
    } else {
      setTasks(allTasks.filter((t) => !t.completed));
    }
  }

  return (
    <TodoContext.Provider
      value={{
        tasks,
        modal,
        setTasks,
        toggleTask,
        updateTask,
        deleteTask,
        addTask,
        setModal,
        modalType,
        filterTodos,
        setModalType,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
