import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages

import HomePage from "./pages/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            layou di default
            <Route>Pagina di 404</Route>
            <Route index element={<HomePage />} />
            <Route>paina dei luoghi</Route>
            <Route>pagina del dettaglio</Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
