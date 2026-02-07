import "../index.css";
import { House, Search, Bell, User, Pen } from "lucide-react";

export default function Sidebar() {
  console.log();
  return (
    <nav className="ml-20 w-65 border-2  border-zinc-500 flex-none">
      <h1 className="p-5 pl-2.5">Why?</h1>

      <a href="/home" className="p-5 pl-2.5 flex ">
        <House /> <span className="ml-4">Home</span>
      </a>
      <a href="/search" className="p-5 pl-2.5 flex ">
        <Search /> <span className="ml-4">Search</span>
      </a>
      <a href="/notifications" className="p-5 pl-2.5 flex ">
        <Bell /> <span className="ml-4">Notifications</span>
      </a>
      <a href="/profile" className="p-5 pl-2.5 flex ">
        <User /> <span className="ml-4">Profile</span>
      </a>
      <a href="/post" className="p-5 pl-2.5 flex ">
        <Pen /> <span className="ml-4">Post</span>
      </a>

      <section className="absolute bottom-10 ml-6">Username</section>
    </nav>
  );
}
