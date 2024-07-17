import PlayRandomMoveEngine from "../PlayRandomMoveEngine"

export const Game = () => {
    return (
        
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 p-4">
      <div className="text-white text-4xl font-bold mb-8">
        Play against a Computer
      </div>
      <div className="w-full max-w-2xl">
        <PlayRandomMoveEngine />
      </div>
    </div>
       
    )
}