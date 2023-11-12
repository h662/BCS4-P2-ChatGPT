import axios from "axios";

const ChatSubmit = ({ content, setContent }) => {
  const onSubmitChat = async (e) => {
    try {
      e.preventDefault();

      if (!content) return;

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

      console.log(response);
      setContent("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-24 md:h-32 bg-white border-t-2 border-pink-300 absolute bottom-0 w-full">
      <form className="flex items-center h-full" onSubmit={onSubmitChat}>
        <input
          className="ml-2 w-full py-1 px-2 focus:outline-none border-2 focus:border-pink-400 md:py-3"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          className="w-20 md:w-40 text-xs mx-2 bg-pink-400 active:bg-pink-600 py-2 rounded-lg md:py-3 md:text-xl"
          type="submit"
        />
      </form>
    </div>
  );
};

export default ChatSubmit;
