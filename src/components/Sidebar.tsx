import "../index.css";
import { House, Search, Bell, User, Pen, icons } from "lucide-react";

export default function Sidebar() {
  const iconSize = 25;
  return (
    <header className="flex">
      <div className="flex flex-col right w-68.75">
        <h1 className="text-3xl font-bold font-sans mt-2 mb-3 ml-4">λ</h1>

        <a href="/home" className="m-3.25 ml-4 flex">
          <House /> <span className="ml-4">Home</span>
        </a>
        <a href="/search" className="m-3.25 ml-4 flex">
          <Search /> <span className="ml-4">Search</span>
        </a>
        <a href="/notifications" className="m-3.25 ml-4 flex">
          <Bell /> <span className="ml-4">Notifications</span>
        </a>
        <a href="/profile" className="m-3.25 ml-4 flex">
          <User /> <span className="ml-4">Profile</span>
        </a>
        <a href="/post" className="m-3.25 ml-4 flex">
          <Pen /> <span className="ml-4">Post</span>
        </a>

        <section className="absolute hover:bg-zinc-300 dark:hover:bg-zinc-700 p-4 pl-4 pr-8 rounded-full flex flex-row place-items-center justify-center items-center bottom-10 ml-6"><img className="background-white w-12 rounded-full" src="https://cdn.freebiesupply.com/logos/thumbs/2x/linux-tux-1-logo.png" alt="" /> <div className=" ml-3 flex flex-col"><span>Chicower</span><span>@hardware</span></div></section>
      </div>
    </header>
  );
}
