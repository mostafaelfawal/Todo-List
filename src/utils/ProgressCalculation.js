import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function ProgressCalculation() {
  const { tasks } = useContext(TodoContext);
  const completed = tasks.filter((task) => task.completed === true);
  const calc = (completed.length / tasks.length) * 100
  return calc;
}

