import ChatLogCard from "./ChatLogCard";

const ChatLog = ({ chatList }) => {
  return (
    <div className="bg-blue-100 w-1/4 min-w-[120px]">
      <ul className="p-4">
        {chatList &&
          chatList.map((v, i) => (
            <ChatLogCard key={i} question={v.question} answer={v.answer} />
          ))}
      </ul>
    </div>
  );
};

export default ChatLog;
