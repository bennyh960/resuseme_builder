import { Outlet } from "react-router-dom";

import ProgressNavigation from "./components/ProgressNavigation/ProgressNavigation";

import Preview from "./components/Preview/Preview";

import { formRoutes } from "./routes/route";

import { useMemo } from "react";
import Modal from "./components/UI/Modal";
import useCustomContext from "./hooks/useCustomContext";

function App() {
  const { globalModal, setGlobalModal } = useCustomContext();
  const formRout = useMemo(() => {
    return formRoutes.map((r) => ({ label: r.label, path: r.path as string }));
  }, []);

  return (
    <div className="sm:h-screen w-screen flex flex-col sm:flex-row relative">
      <section className="flex flex-col flex-grow sm:flex-grow-0 flex-shrink-2 sm:h-full p-10" style={{ flex: "1" }}>
        <div className="h-[10%] w-full">
          <ProgressNavigation routes={formRout} />
        </div>

        <div className="h-[90%]">
          <Outlet />
        </div>
      </section>

      <section className="min-w-1/2 flex-grow sm:w-1/2 sm:flex-grow-0 bg-gray-100 p-10 sticky top-[10px] overflow-auto">
        <Preview />
      </section>
      <Modal isOpen={globalModal !== null} onClose={() => setGlobalModal(null)} onOk={() => "ok"}>
        {globalModal}
      </Modal>
    </div>
  );
}

export default App;
