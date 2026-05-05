import { Home, Trophy, Laptop, Presentation, Mic, CircleUser } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
  const menuItems = [
    { label: "Beranda", href: "/", icon: <Home size={18} /> },
    { label: "Competition", href: "/competition", icon: <Trophy size={18} /> },
    { label: "Seminar", href: "/seminar", icon: <Presentation size={18} /> },
    { label: "Workshop", href: "/workshop", icon: <Laptop size={18} /> },
    { label: "Talkshow", href: "/talkshow", icon: <Mic size={18} /> },
    { label: "", href: "/login", icon: <CircleUser size={18} /> },
  ];

  const activeStyle = "text-red-900";
  const defaultStyle = "text-slate-600 hover:text-red-900";

  return (
    <header className="bg-white shadow-sm w-full">
      <div className="flex justify-between items-center px-6 py-3 w-full">
        
        {/* LEFT - LOGO */}
        <div>
          <img
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
            alt="logo"
            className="h-14"
          />
        </div>

        {/* RIGHT - NAV */}
        <nav className="flex items-center gap-4">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 font-medium transition-all duration-200 ${
                  isActive ? activeStyle : defaultStyle
                }`
              }
            >
              {item.icon && <span>{item.icon}</span>}
              {item.label && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;