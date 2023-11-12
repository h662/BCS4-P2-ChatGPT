const ChatLog = ({ chatList }) => {
  return (
    <div className="bg-blue-100 w-1/4 min-w-[120px]">
      <ul className="p-4">
        {chatList &&
          chatList.map((v, i) => (
            <li
              key={i}
              className="mb-2 truncate hover:font-bold cursor-pointer"
            >
              {v.question}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ChatLog;
