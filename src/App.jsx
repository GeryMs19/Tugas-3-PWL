import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import Beranda from "./pages/Beranda";
import Tentang from "./pages/Tentang";
import Kontak from "./pages/Kontak";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="about" element={<Tentang />} />
          <Route path="contact" element={<Kontak />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </>
    )
  );

  return (
    <div className="max-w-lg mx-auto">
      <RouterProvider router={router} />;
    </div>
  );
};

export default App;
