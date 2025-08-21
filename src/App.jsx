import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout - Header - Footer
import DefaultLayout from "./layouts/DefaultLayout";

// Pages
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/Homepage";
import SentieriPage from "./pages/SentieriPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="*" element={<NotFoundPage />} />
            <Route index element={<HomePage />} />
            <Route path="/Sentieri" element={<SentieriPage />} />
            <Route>pagina del dettaglio</Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
