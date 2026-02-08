import "../index.css";
import { House, Search, Bell, User, Pen, icons } from "lucide-react";

export default function Sidebar() {
  const iconSize = 25;
  return (
    <header className="flex">
      <div className="flex flex-col right w-68.75">
        <h1 className="text-3xl font-bold font-sans mt-2 ml-3">λ</h1>

        <a href="/home" className="m-7 ml-2.5 flex">
          <House /> <span className="ml-4">Home</span>
        </a>
        <a href="/search" className="m-7 ml-2.5 flex">
          <Search /> <span className="ml-4">Search</span>
        </a>
        <a href="/notifications" className="m-7 ml-2.5 flex">
          <Bell /> <span className="ml-4">Notifications</span>
        </a>
        <a href="/profile" className="m-7 ml-2.5 flex">
          <User /> <span className="ml-4">Profile</span>
        </a>
        <a href="/post" className="m-7 ml-2.5 flex">
          <Pen /> <span className="ml-4">Post</span>
        </a>

        <section className="absolute bottom-10 ml-6">Username</section>
      </div>
    </header>
  );
}
