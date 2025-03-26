import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/route";
import { SiteContext, SiteProvider } from "./hooks/useCustomContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SiteProvider>
      <SiteContext.Consumer>{(siteContext) => <RouterProvider router={router(siteContext)} />}</SiteContext.Consumer>
    </SiteProvider>
  </StrictMode>
);
