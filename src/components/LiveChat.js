import React, { useEffect, useState } from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import NameGenerator, { genarateMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const liveChat = useSelector((store) => store.chat.message);
  const [chatText, setChatText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: NameGenerator(),
          message: genarateMessage(15) + " 🚀",
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-2 border border-black w-full h-full bg-slate-100 ">
      <h2 className="px-2 font-bold">Live Chat</h2>
      <div className=" w-full h-[500px] overflow-y-scroll flex flex-col-reverse">
        {liveChat.map((l, i) => (
          <LiveMessage key={i} name={l.name} message={l.message} />
        ))}
      </div>
      <form
        className="mx-2 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Vishal",
              message: chatText,
            })
          );
          setChatText("");
        }}
      >
        <input
          className="w-8/12 border border-black my-1 rounded-lg bg-gray-300 py-2 px-2"
          type="text"
          value={chatText}
          onChange={(e) => setChatText(e.target.value)}
        />
        <button className="bg-green-400 rounded-lg px-2 mx-2 py-2">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
