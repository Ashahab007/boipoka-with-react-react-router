// 1.1 Setup react render but in src folder created Routes.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";

// 1.3 Now import the router
import { router } from "./Routes/Routes";

// 1.4 passed the router as props in RouterProvider for rendering
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
