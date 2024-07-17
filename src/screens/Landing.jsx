import { useNavigate } from "react-router-dom";




export const Landing = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 p-4">
      <div className="flex w-full max-w-6xl bg-slate-300 rounded-lg shadow-lg overflow-hidden">
        <div className="w-3/5">
          <img
            src="/chess-landing.jpg"
            alt="Chessboard"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-2/5 p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-40 text-center">Chess Online and Database Explorer</h1>
          <div className="space-y-6">
            <button className="w-full bg-blue-500 text-white py-6 px-6 rounded-lg text-xl font-semibold hover:bg-blue-600 transition duration-300">
              Play Online
            </button>
            <button onClick={() =>{
                navigate("/game")
            }} className="w-full bg-green-500 text-white py-6 px-6 rounded-lg text-xl font-semibold hover:bg-green-600 transition duration-300">
              Play Computer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};