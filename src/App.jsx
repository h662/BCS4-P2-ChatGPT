import { useState } from "react";
import ChatSubmit from "./components/ChatSubmit";
import ChatView from "./components/ChatView";

const App = () => {
  const [content, setContent] = useState("");

  return (
    <div className="max-h-screen flex">
      <div className="bg-blue-100 w-1/4 min-w-[120px]">Side</div>
      <div className="w-full h-full flex flex-col bg-yellow-100 relative">
        <ChatView />
        <ChatSubmit content={content} setContent={setContent} />
      </div>
    </div>
  );
};

export default App;
