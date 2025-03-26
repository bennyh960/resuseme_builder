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
    <div id="page" className="flex">
      <div className="card-container max-w-4xl">
        <ProgressNavigation routes={formRout} />
        <Outlet />
      </div>
      <div className="card-container max-w-4xl">
        <Preview />
      </div>
    </div>
  );
}

export default App;
