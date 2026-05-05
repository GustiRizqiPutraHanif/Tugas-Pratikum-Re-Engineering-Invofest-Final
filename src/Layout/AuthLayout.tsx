import { Outlet } from "react-router-dom";

export default function AuthLayouts() {
  return (
    <div className="grid grid-cols-2 min-h-screen">

      {/* LEFT SIDE */}
      <div className="bg-gray-100 flex items-center justify-center">
        <img
          src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
          alt="invofest"
          className="w-96"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>

    </div>
  );
}