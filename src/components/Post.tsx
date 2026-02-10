import { users } from "../users";
import type { Tweet } from "../tweets";
import { Heart, Repeat2, Ellipsis } from "lucide-react";

export default function Post({ tweet }: { tweet: Tweet }) {
  console.log(tweet);
  const user = users.find((user) => user.id === tweet.user_id);
  return (
    <div className="w-149.5 h-fit flex border-zinc-800 border-b">
      <div className="flex items-start justify-center w-15 shrink-0">
        <a href={user?.handle}>
          <img
            className="bg-white dark:bg-black size-11.5 mt-2.5 object-contain rounded-full"
            src={user?.avatar}
            alt=""
          />
        </a>
      </div>
      <div>
        <div className="flex flex-row justify-start mt-2.5 ml-2">
          {user?.name} <span className="opacity-50">{user?.handle}</span>{" "}
          <div className="justify-self-end ml-auto mr-4">
            <Ellipsis />
          </div>
        </div>
        <div className="flex wrap-break-word w-full grow-0 pt-1 pb-0 p-2">
          {tweet.content}
        </div>
        <div className="flex flex-row text-sm items-center justify-start h-10">
          <div className="group flex flex-row gap-1.5 hover:text-pink-500 cursor-pointer items-center justify-end p-2 ml-0 m-1">
            <div className="p-1.5 rounded-full group-hover:bg-pink-500/10">
              <Heart size={18} />
            </div>
            <div>{tweet.likes}</div>
          </div>
          <div className="group flex flex-row gap-1.5 hover:text-green-500 cursor-pointer items-center justify-center p-2">
            <div className="p-1.5 rounded-full group-hover:bg-green-500/10">
              <Repeat2 size={18} />
            </div>
            <div>{tweet.retweets}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
