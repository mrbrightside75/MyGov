import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import MyGovernment from "./MyGovernment";
import MyRep from "./MyRep";
import MyBallot from "./MyBallot";

// Define your routes
const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/mygovernment",
    element: <MyGovernment />,
  },
  {
    path: "/myrep",
    element: <MyRep />,
  },
  {
    path: "/myballot",
    element: <MyBallot />,
  },
];

// Create a router with the basename set to your repository name
const router = createBrowserRouter(routes, { basename: "/MyGov" });

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
