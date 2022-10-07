import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Band from '../screens/Band';

const routerObj = createBrowserRouter([
  {
    path: "/",
    element: <Band />,
  },
  {
    path: "about",
    element: <div>About</div>
  }
]);

const Router = () => {
  return (
    <RouterProvider router={routerObj} />
  )
}

export default Router;