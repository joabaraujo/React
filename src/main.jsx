import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import TaskDetails from "./pages/TaskDetails.jsx";
// roteamento
import {  
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/task",
      element: <TaskDetails />,
    },
  ])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
