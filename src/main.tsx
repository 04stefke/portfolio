import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Projects from "./Pages/Projects.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <div>'404 Not Found'</div>,
	},
  {
		path: "/projects",
		element: <Projects />,
		errorElement: <div>'404 Not Found'</div>,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
