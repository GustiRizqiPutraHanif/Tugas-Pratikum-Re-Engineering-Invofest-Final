export default function DashboardIndex() {
  return (
    <div className="p-6 bg-blue-100 min-h-screen">

      {/* HEADER */}
      <div className="
        border-4 border-black 
        bg-blue-400 
        shadow-[6px_6px_0px_#000] 
        p-6 mb-6
      ">
        <h1 className="text-3xl font-black uppercase tracking-tight text-black">
          Dashboard
        </h1>
        <p className="font-bold text-black mt-1">
          Selamat datang di dashboard Anda!
        </p>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div className="
          bg-white 
          border-4 border-black 
          p-6 
          shadow-[6px_6px_0px_#000]
          hover:translate-x-0.5 hover:translate-y-0.5
          transition-all
        ">
          <h2 className="font-bold text-lg mb-2">Total Event</h2>
          <p className="text-3xl font-black">12</p>
        </div>

        {/* CARD 2 */}
        <div className="
          bg-blue-300 
          border-4 border-black 
          p-6 
          shadow-[6px_6px_0px_#000]
          hover:translate-x-0.5 hover:translate-y-0.5
          transition-all
        ">
          <h2 className="font-bold text-lg mb-2">Total User</h2>
          <p className="text-3xl font-black">230</p>
        </div>

        {/* CARD 3 */}
        <div className="
          bg-blue-500 text-white
          border-4 border-black 
          p-6 
          shadow-[6px_6px_0px_#000]
          hover:translate-x-0.5 hover:translate-y-0.5
          transition-all
        ">
          <h2 className="font-bold text-lg mb-2">Active</h2>
          <p className="text-3xl font-black">87%</p>
        </div>

      </div>

    </div>
  );
}