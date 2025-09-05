import { FaPlus } from "react-icons/fa";
import { useState, useContext } from "react";
import Modal from "./Modal";
import { TodoContext } from "../context/TodoContext";

export default function TaskInput() {
  const [inputTask, setTaskInput] = useState({
    title: "",
    isCompleted: false,
  });
  const { addTask, modal, setModal, setModalType, modalType } = useContext(TodoContext);

  return (
    <section className="flex gap-2">
      <input
        placeholder="Enter your task..."
        onChange={(e) => setTaskInput({ ...inputTask, title: e.target.value })}
        value={inputTask.title}
        className="border-1 bg-green-400 rounded px-2 focus:outline-2 outline-green-600"
      />
      <button
        onClick={() => {
          addTask(inputTask.title);
          setTaskInput({ title: "", isCompleted: false })
          setModalType("add");
        }}
        className="bg-green-400 flex items-center gap-2 p-1 rounded border-1 shadow duration-300 hover:shadow-green-300 hover:bg-green-300"
      >
        Add Task <FaPlus />
      </button>
      {modal && modalType === "add" ? (
        <Modal isOpen={modal} closeModal={() => setModal(false)}>
          <p>Please Enter Your Task</p>
        </Modal>
      ) : null}
    </section>
  );
}
