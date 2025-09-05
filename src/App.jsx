import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

/*
-------------------------------------------------
|              My TodoList (Navbar)             |
-------------------------------------------------
| [ Input Field ............ ] [+ Add Task ]    |
-------------------------------------------------
| [ All ] [ Completed ] [ Incomplete ]          |
-------------------------------------------------
| [] Task 1       [Edit] [Delete]               |
| [x] Task 2 ✔    [Edit] [Delete]               |
| [] Task 3       [Edit] [Delete]               |
-------------------------------------------------
| Progress: [■■■■■■■■□□□] 66%                   |
-------------------------------------------------

*/
