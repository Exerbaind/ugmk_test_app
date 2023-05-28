import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Details from "./pages/Details";
import CenteredLayout from "./layouts/CenteredLayout";

import "./global.css";

function App() {
  return (
    <CenteredLayout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:factoryID/:monthID" element={<Details />} />
      </Routes>
    </CenteredLayout>
  );
}

export default App;
