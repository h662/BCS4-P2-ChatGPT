import axios from "axios";
import { useState } from "react";

const ChatSubmit = ({ content, setContent, chatList, setChatList }) => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitChat = async (e) => {
    try {
      e.preventDefault();

      if (!content) return;

      setIsLoading(true);

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
          },
        }
      );

      setChatList([
        ...chatList,
        {
          question: content,
          answer: response.data.choices[0].message.content,
        },
      ]);

      setIsLoading(false);
      setContent("");
    } catch (error) {
      console.error(error);

      setIsLoading(false);
    }
  };

  return (
    <div className="h-24 md:h-32 bg-white border-t-2 border-pink-300 absolute bottom-0 w-full">
      <form className="flex items-center h-full" onSubmit={onSubmitChat}>
        <input
          className={`ml-2 w-full py-1 px-2 focus:outline-none border-2 focus:border-pink-400 md:py-3 ${
            isLoading && "bg-gray-300 border-gray-500"
          }`}
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="무엇이든 물어보세요. Chat-GPT"
          disabled={isLoading}
        />
        <input
          className={`w-20 md:w-40 text-xs mx-2 active:bg-pink-600 py-2 rounded-lg md:py-3 md:text-xl ${
            isLoading ? "bg-gray-400" : "bg-pink-400"
          }`}
          type="submit"
          value={isLoading ? "로딩중" : "검 색"}
          disabled={isLoading}
        />
      </form>
    </div>
  );
};

export default ChatSubmit;
