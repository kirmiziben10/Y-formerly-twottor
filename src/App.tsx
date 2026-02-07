import { useState } from "react";
import "./index.css";
import Sidebar from "./components/Sidebar";
import { Sun, Moon } from "lucide-react";

function App() {
  const [theme, setTheme] = useState("");
  function manageTheme() {
    theme === "dark" ? setTheme("") : setTheme("dark");
  }

  return (
    <div
      className={
        "bg-zinc-50 dark:bg-zinc-950 text-black  dark:text-white  flex w-full h-screen w-f " +
        theme
      }
    >
      <Sidebar className/>
      <div className=" flex justify-center place-items-center flex-1">
          TESTING
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
