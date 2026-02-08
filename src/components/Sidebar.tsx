import "../index.css";
import { House, Search, Bell, User, Pen, icons } from "lucide-react";

export default function Sidebar() {
  const menuItemsClass =
    "p-3 m-0.5 ml-0 pr-6 h-13.5 text-xl rounded-full inline-flex flex-row justify-start items-center hover:bg-zinc-300 dark:hover:bg-zinc-700";
  const iconSize = "28px"
    return (
    <header className="flex">
      <div className="flex flex-col items-start right w-68.75">
        
        <div className="flex items-center justify-center text-4xl font-bold font-sans size-14">
          <a href="/" >λ</a>
        </div>

        <a href="/home" className={menuItemsClass}>
          <div className="inline-block">
            <House size={iconSize}/>
          </div>
          <div className="ml-4 inline-block">Home</div>
        </a>
        <a href="/search" className={menuItemsClass}>
          <div className="inline-block">
            <Search size={iconSize}/>
          </div>
          <div className="ml-4 inline-block">Search</div>
        </a>
        <a href="/notifications" className={menuItemsClass}>
          <div className="inline-block">
            <Bell size={iconSize}/>
          </div>
          <div className="ml-4 inline-block">Notifications</div>
        </a>
        <a href="/profile" className={menuItemsClass}>
          <div className="inline-block">
            <User size={iconSize}/>
          </div>
          <div className="ml-4 inline-block">Profile</div>
        </a>
        <a href="/post" className={"p-3 m-0.5 ml-0 pr-6 h-13.5 text-xl rounded-full flex-row items-center hover:bg-zinc-700 dark:hover:bg-zinc-700 self-center bg-zinc-800 text-white w-60 mt-8 flex justify-center"}>
          <div className="items-center">
            <Pen size={iconSize}/>
          </div>
          <div className="ml-4 inline-block">Post</div>
        </a>

        <section className="absolute bottom-10">
          <a href="/profile" className=" hover:bg-zinc-300 dark:hover:bg-zinc-700 p-2 pl-4 pr-8 rounded-full flex flex-row place-items-center justify-center items-center ml-6">
            <img
              className="background-white w-12 rounded-full"
              src="https://cdn.freebiesupply.com/logos/thumbs/2x/linux-tux-1-logo.png"
              alt="Profile picture"
            />
            <div className=" ml-3 flex flex-col">
              <span>Chicower</span>
              <span>@hardware</span>
            </div>
          </a>
        </section>
      </div>
    </header>
  );
}
