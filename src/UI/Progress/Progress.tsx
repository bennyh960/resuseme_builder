import React from "react";
import { Link, useLocation } from "react-router-dom";

type Route = {
  path: string;
  label: string;
};

type ProgressNavigationProps = {
  routes: Route[];
};

const ProgressNavigation: React.FC<ProgressNavigationProps> = ({ routes }) => {
  const location = useLocation();

  if (!location) return null;
  return (
    <div className="w-full mx-auto mb-7">
      <div className="relative flex items-center justify-between">
        {routes.map((route) => {
          const isActive = location.pathname === route.path;

          return (
            <div key={route.path} className="relative flex flex-col items-center z-10">
              <Link to={route.path}>
                <div style={{ alignItems: "center" }} className="flex flex-col justify-center content-center   ">
                  <span className={`my-2 text-sm ${isActive ? "text-blue-500 font-semibold" : "text-gray-500"}`}>
                    {route.label}
                  </span>
                  <span
                    className={`w-5 h-5 bg-white border border-blue-500 rounded-full ${
                      isActive ? "shadow-custom-1" : ""
                    }`}
                  ></span>
                </div>
              </Link>
            </div>
          );
        })}
        <div className="absolute bottom-1.5 w-full h-1 bg-gray-200 rounded-full transform -translate-y-1/2 z-0">
          <div className="h-full w-full bg-blue-500 rounded-full transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default ProgressNavigation;
