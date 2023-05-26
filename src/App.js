import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Details from "./pages/Details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}

export default App;
