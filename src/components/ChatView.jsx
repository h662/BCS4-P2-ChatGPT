const ChatView = ({ chatList }) => {
  return (
    <div className="flex flex-col justify-end h-screen">
      <ul className="max-h-screen overflow-y-auto py-4 text-xs md:text-base justify-end mb-28 md:mb-32">
        {chatList &&
          chatList.map((v, i) => (
            <li key={i} className="flex flex-col gap-4 mb-6">
              <div className="bg-gray-50 mx-2 p-2 rounded-md w-fit shadow-md">
                {v.answer}
              </div>
              <div className="bg-yellow-200 self-end  mx-2 p-2 rounded-md shadow-md">
                {v.question}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ChatView;
