import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import MyGovernment from "./MyGovernment";
import MyRep from "./MyRep";
import MyBallot from "./MyBallot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyBallot />,
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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
