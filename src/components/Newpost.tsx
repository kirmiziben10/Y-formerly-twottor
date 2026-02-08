import "../index.css";
import { Image, MapPin} from "lucide-react"
export default function Newpost() {
  return (
    <section className="flex flex-col h-30 w-full border-zinc-700 border-b">
      <div className="flex flex-row items-start">
        <div className="flex place-items-center size-15 ml-2">
          <img
            className="bg-white dark:bg-black size-12 object-contain rounded-full resize-none"
            src="https://cdn.freebiesupply.com/logos/thumbs/2x/linux-tux-1-logo.png"
            alt="Profile picture"
          />
        </div>
        <div className="flex flex-col w-full min-h-16 m-0">
          <input
            placeholder="What's happening?"
            className="resize-none h-full text-black dark:text-white w-full text-xl min-h-16"
          ></input>
          <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row h-12 items-center"><Image className="cursor-pointer hover:opacity-50"/><MapPin className="cursor-pointer hover:opacity-50"/></div>
              <div><button className="cursor-pointer bg-zinc-700 text-white rounded-full pl-4.5 pr-4.5 p-1.75 mr-3.5" onClick={()=>console.log("Posted")}>Post</button></div>
          </div>
        </div>
      </div>
    </section>
  );
}
