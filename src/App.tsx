import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="bg-neutral-50 h-screen w-screen">
      <div className="bg-orange-300 rounded-full w-32 h-32 mx-auto mt-10"></div>
      <div className="bg-pink-300 w-32 h-32 rounded-xl mx-auto mt-10"></div>
      <div className="bg-green-300 w-32 h-32 mx-auto mt-10 [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"></div>
      <div className="border-pink-500 w-20 h-20 rounded-full border-8  bg-transparent"></div>
      <div className="bg-pink-300 w-32 h-32  mx-auto mt-10"></div>
      <div className="bg-blue-400 w-32 h-32  mx-auto mt-10 -rotate-45"></div>
      <div className="bg-orange-300 w-16 h-6 rounded-full mx-auto mt-10 -rotate-35"></div>
      <Outlet />
    </div>
  );
}
export default App;
