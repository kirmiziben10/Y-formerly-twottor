import {users} from "../users"
import type { Tweet } from "../tweets";
import {Heart, Repeat2} from "lucide-react"


export default function Post({tweet}: {tweet: Tweet}) {
  console.log(tweet);
  const user = users.find(user => user.id === tweet.user_id)
  return (
    <div className="w-149.5 h-fit flex border-zinc-700 border-b">
      <div className="flex items-start justify-center w-15 shrink-0">
        <a href={user?.handle}><img className="bg-white dark:bg-black size-11.5 mt-2.5 object-contain rounded-full" src={user?.avatar} alt="" /></a>
      </div>
      <div>
        <div className="mt-2.5 ml-2">{user?.name} <span className="opacity-50">{user?.handle}</span></div>
        <div className="flex wrap-break-word w-full grow-0 pt-1 pb-0 p-2">{tweet.content}</div>
        <div className="flex flex-row items-center justify-start h-10"><div className="flex flex-row justify-end p-2 m-1"><Heart/><span>{tweet.likes}</span></div> <div className="flex flex-row justify-center p-2"><Repeat2/><span>{tweet.retweets}</span></div></div>
      </div>
    </div>
  );
}
