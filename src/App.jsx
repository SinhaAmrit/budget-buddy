import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { dashboardLoder } from "./pages/Dashboard";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: dashboardLoder,
    errorElement: <Error />,
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
