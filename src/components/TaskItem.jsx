import { FaTrash, FaEdit, FaCheck, FaUndo } from "react-icons/fa";
import { TodoContext } from "../context/TodoContext";
import { useContext, useState } from "react";
import Modal from "./Modal";

export default function TaskItem() {
  const {
    tasks,
    toggleTask,
    deleteTask,
    modal,
    setModal,
    setModalType,
    modalType,
    updateTask,
  } = useContext(TodoContext);
  const [modalId, setModalId] = useState(0);
  const [editInput, setEditInput] = useState("");

  return (
    <div className="rounded flex-col flex gap-1 max-h-50 overflow-y-auto">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div
            key={task.id}
            className="flex shadow justify-between px-2 py-1 items-center border-1 rounded"
          >
            <h2
              className={`font-semibold break-words max-w-43 ${
                task.completed ? "line-through" : ""
              }`}
            >
              {task.title}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => (
                  setModal(true), setModalType("delete"), setModalId(task.id)
                )}
                className="p-2 rounded-full bg-red-400 border-1 flex justify-center items-center"
              >
                <FaTrash />
              </button>
              <button
                onClick={() => (
                  setModal(true),
                  setModalType("edit"),
                  setEditInput(task.title),
                  setModalId(task.id)
                )}
                className="p-2 rounded-full bg-blue-400 border-1 flex justify-center items-center"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => toggleTask(task.id)}
                className={`p-2 rounded-full ${
                  task.completed ? "bg-green-600" : "bg-green-400"
                } border-1 flex justify-center items-center`}
              >
                {task.completed ? <FaUndo /> : <FaCheck />}
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="flex shadow justify-center px-2 py-1 items-center border-1 rounded">
          <h2 className="font-semibold max-w-43 text-center">
            You have completed all your tasks!
          </h2>
        </div>
      )}
      {modal && modalType === "delete" ? (
        <Modal isOpen={modal} closeModal={() => setModal(false)}>
          <p>Are you sure to delete this task ?</p>
          <button
            onClick={() => {
              deleteTask(modalId);
              setModal(false);
            }}
            className="border-1 bg-red-400 px-1 mt-2 rounded-full w-[100%]"
          >
            Delete
          </button>
        </Modal>
      ) : null}
      {modal && modalType === "edit" ? (
        <Modal isOpen={modal} closeModal={() => setModal(false)}>
          <p className="font-semibold">Edit this task</p>
          <input
            placeholder="Enter edit task..."
            onChange={(e) => setEditInput(e.target.value)}
            value={editInput}
            className="border-1 bg-green-400 rounded px-2 focus:outline-2 outline-green-600"
          />
          <button
            onClick={() => {
              updateTask(modalId, editInput);
              setModal(false);
            }}
            className="border-1 bg-blue-400 px-1 mt-2 rounded-full w-[100%]"
          >
            Confirm
          </button>
        </Modal>
      ) : null}
    </div>
  );
}
