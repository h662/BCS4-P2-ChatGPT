const ChatSubmit = () => {
  return (
    <div className="h-24 md:h-32">
      <form className="flex items-center h-full">
        <input
          className="ml-2 w-full py-1 px-2 focus:outline-none border-2 focus:border-pink-400 md:py-3"
          type="text"
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
