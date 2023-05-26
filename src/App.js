import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Details from "./pages/Details";

import "./global.css";
import ContentLayout from "./layouts/ContentLayout";

function App() {
  return (
    <ContentLayout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </ContentLayout>
  );
}

export default App;
