import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderShowcase from "../pages/HeaderShowcase";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderShowcase />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;