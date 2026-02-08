import { useState } from "react";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Feed";
import { Sun, Moon } from "lucide-react";

function App() {
  const [theme, setTheme] = useState("");
  function manageTheme() {
    theme === "dark" ? setTheme("") : setTheme("dark");
  }

  return (
    <div
      className={
        "bg-zinc-50 dark:bg-black text-black dark:text-white flex justify-center h-screen w-f transition-colors duration-300 " +
        theme
      }
    >
      <div className=" w-316.25 flex flex-row">
        <Sidebar />
        <Main />
      </div>

      {/*dark-mode toggle*/}
      <div className="bg-zinc-300 dark:bg-zinc-700 bottom-2 right-2 absolute flex place-items-center rounded p-1">
        <button className="p-1 rounded hover:bg-zinc-400" onClick={manageTheme}>
          {theme === "dark" ? (
            <Sun color="white" size={24} />
          ) : (
            <Moon color="black" size={24} />
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
