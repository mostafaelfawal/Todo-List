import { FaList } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="w-screen flex justify-center items-center gap-2 py-2 bg-green-400 border-1">
      <h1>My TodoList</h1>
      <FaList />
    </header>
  );
}
