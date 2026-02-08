import "../index.css";
import Widgets from "./Widgets";
import Newpost from "./Newpost";
export default function Feed() {
  return (
    <main className="flex flex-row space-betwee content-between w-262.5">
      <div className="flex flex-col w-150 border-zinc-700 border-x">
        
        <div className="flex flex-row items-center justify-evenly w-full h-13.5 border-zinc-700 border-b">
          <div className="flex w-1/2 items-center justify-center h-full border-zinc-700">
            <div className="flex flex-col h-full">
              <div className="flex h-full place-items-center">
                <h1 className="inline">For you</h1>
              </div>
              <div className="w-full bg-black dark:bg-white h-1 rounded-full"></div>
            </div>
          </div>
          <div className="flex w-1/2 items-center justify-center h-full">
            <div className="flex flex-col h-full">
              <div className="flex h-full place-items-center">
                <h1 className="inline">Following</h1>
              </div>
              <div className="w-full bg-black dark:bg-white h-1 rounded-full"></div>
            </div>
          </div>
        </div>

        <Newpost />
      </div>
      <Widgets />
    </main>
  );
}
