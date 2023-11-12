import ChatSubmit from "./components/ChatSubmit";

const App = () => {
  return (
    <div className="min-h-screen flex">
      <div className="bg-blue-100 w-1/4 min-w-[120px]">Side</div>
      <div className="w-full flex flex-col">
        <div className="bg-yellow-100 h-full">Main</div>
        <ChatSubmit />
      </div>
    </div>
  );
};

export default App;
