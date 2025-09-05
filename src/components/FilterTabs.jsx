import { FaList, FaCheck, FaTimes } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export default function FilterTabs() {
  const { filterTodos } = useContext(TodoContext);
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", icon: <FaList />, tooltip: "All tasks" },
    { id: "completed", icon: <FaCheck />, tooltip: "Completed tasks" },
    { id: "incomplete", icon: <FaTimes />, tooltip: "Unfinished tasks" },
  ];

  return (
    <div className="bg-green-400 border-1 py-1 flex justify-around rounded">
      {filters.map((filter) => (
        <button
          key={filter.id}
          data-tooltip-id="filter-tooltip"
          data-tooltip-content={filter.tooltip}
          onClick={() => {
            setActiveFilter(filter.id),
            filterTodos(filter.id);
          }}
          className={`border-1 duration-300 hover:bg-green-200 active:bg-green-300 bg-white p-2 rounded-lg 
            ${activeFilter === filter.id ? "active-filter" : ""}`}
        >
          {filter.icon}
        </button>
      ))}

      <Tooltip
        id="filter-tooltip"
        place="top"
        delayShow={600}
        arrowColor="green"
      />
    </div>
  );
}
