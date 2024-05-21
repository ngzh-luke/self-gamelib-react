import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
// import * as GameDetails from "./pages/gameDetails";

export const AppNavigator = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" index element={<App />}></Route>)
  );

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};
