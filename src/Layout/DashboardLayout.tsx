import { Outlet, useNavigate, NavLink } from "react-router-dom";
import { useAuthStore } from "../Store/AuthStore";

export default function DashboardLayouts() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
    alert("Logout berhasil!");
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `
    font-bold uppercase border-4 border-black p-2 
    shadow-[4px_4px_0px_#000] 
    transition-all
    ${isActive ? "bg-blue-500 text-white" : "bg-white text-black"}
    hover:bg-blue-300 
    hover:shadow-[6px_6px_0px_#000]
    hover:-translate-x-0.5 hover:-translate-y-0.5
    active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#000]
  `;

  return (
    <div className="flex w-full min-h-screen bg-blue-100">

      {/* SIDEBAR */}
      <div className="
        w-64 p-4 bg-blue-400
        flex flex-col justify-between
        border-r-4 border-black
        shadow-[6px_0px_0px_#000]
        rounded-r-3xl
        min-h-screen
      ">

        {/* TITLE */}
        <div>
          <div className="border-b-4 border-black text-center p-2 mb-4">
            <h2 className="text-black text-xl font-black uppercase">
              Invofest Dashboard
            </h2>
          </div>

          {/* MENU */}
          <div className="flex flex-col gap-3">
            <NavLink to="/dashboard" className={linkClass}>
              Dashboard
            </NavLink>

            <NavLink to="/dashboard/category" className={linkClass}>
              Category
            </NavLink>

            <NavLink to="/dashboard/event" className={linkClass}>
              Event
            </NavLink>

            <NavLink to="/dashboard/seminar" className={linkClass}>
              Seminar
            </NavLink>
          </div>
        </div>

        {/* LOGOUT */}
        <div className="mt-6">
          <button
            onClick={handleLogout}
            className="
              bg-red-500 text-white w-full p-2
              font-black uppercase
              border-4 border-black
              shadow-[4px_4px_0px_#000]
              hover:bg-red-600
              hover:shadow-[6px_6px_0px_#000]
              hover:-translate-x-0.5 hover:-translate-y-0.5
              active:translate-x-0.5 active:translate-y-0.5
              active:shadow-[2px_2px_0px_#000]
              transition-all
            "
            type="button"
          >
            Logout
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-6 bg-blue-100">
        <Outlet />
      </div>

    </div>
  );
}