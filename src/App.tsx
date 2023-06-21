import { BrowserRouter, Route, Routes } from "react-router-dom";

import Onboarding from "./pages/Onboarding";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
