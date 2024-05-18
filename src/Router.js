import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layouts/layout";
import Dashboard from "./pages/dashboard";
import Users from "./pages/users";
import Statistical from "./pages/statistical";
import Products from "./pages/products";
import Catalog from "./pages/catalog";
import Logout from "./pages/logout";
import Nofication from "./pages/notification";
import Setting from "./pages/setting";
import Website from "./pages/website";

function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />

        <Route path="users" element={<Users />} />
        <Route path="statistical" element={<Statistical />} />
        <Route path="products" element={<Products />} />

        <Route path="catalog" element={<Catalog />} />
        <Route path="notification" element={<Nofication />} />
        <Route path="website" element={<Website />} />
        <Route path="setting" element={<Setting />} />

        <Route path="logout" element={<Logout />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default Router;
