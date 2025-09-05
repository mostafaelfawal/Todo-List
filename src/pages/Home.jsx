import TaskInput from "../components/TaskInput";
import FilterTabs from "../components/FilterTabs";
import ProgressBar from "../components/ProgressBar";
import TaskItem from "../components/TaskItem";
import { TodoContextProvider } from "../context/TodoContextProvider";

export default function Home() {
  return (
    <div className="h-[93vh] flex justify-center items-center ">
      <div className="border-1 rounded-xl py-4 px-5 flex flex-col gap-2">
        <TodoContextProvider>
          <TaskInput />
          <FilterTabs />
          <TaskItem />
          <ProgressBar />
        </TodoContextProvider>
      </div>
    </div>
  );
}
