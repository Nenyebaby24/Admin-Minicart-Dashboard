import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shell from "./components/layout/Shell";
import Dashboard from "./features/dashboard/Dashboard";
import Revenue from "./features/revenue/Revenue";
import Locations from "./features/locations/Locations";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shell />}>
          <Route index element={<Dashboard />} />
         <Route path="revenue" element={<Revenue />} />
          <Route path="locations" element={<Locations />} />
          <Route path="plans" element={<h1>Plans Page</h1>} />
          <Route path="stores" element={<h1>Stores Page</h1>} />
          <Route path="pages" element={<h1>Pages Page</h1>} />
          <Route path="media" element={<h1>Media Page</h1>} />
          <Route path="users" element={<h1>Users Page</h1>} />
          <Route path="support" element={<h1>Support Page</h1>} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
