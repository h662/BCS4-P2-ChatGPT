const App = () => {
  return (
    <div className="bg-red-100 min-h-screen flex">
      <div className="bg-blue-100 w-1/4 min-w-[120px]">Side</div>
      <div className="bg-green-100 w-full flex flex-col">
        <div className="bg-yellow-100 h-full">Main</div>
        <div className="bg-purple-100 h-24 md:h-32">Chat</div>
      </div>
    </div>
  );
};

export default App;
