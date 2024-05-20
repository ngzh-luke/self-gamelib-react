import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" index element={<App />}></Route>)
);

export const AppNavigator = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};
