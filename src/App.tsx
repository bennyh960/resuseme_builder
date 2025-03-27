import { Outlet } from "react-router-dom";
import ProgressNavigation from "./UI/Progress/Progress";
import Preview from "./components/Preview/Preview";
import { formRoutes } from "./routes/route";
import { useMemo } from "react";

function App() {
  const formRout = useMemo(() => {
    return formRoutes.map((r) => ({ label: r.label, path: r.path as string }));
  }, []);
  return (
    <div id="page" className="flex flex-col md:flex-row">
      <div className="flex-grow p-10">
        <div className="h-[10%]">
          <ProgressNavigation routes={formRout} />
        </div>
        <div className="h-[90%]">
          <Outlet />
        </div>
      </div>
      <div className="flex-shrink-1 min-w-1/2 bg-[#eff2f9] flex items-center justify-center preview-wrapper">
        <Preview />
      </div>
    </div>
  );
}

export default App;
