import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ErrorPage from "../pages/ErrorPage";
export const Router = () => {
  return (
    <BrowserRouter>
      {/* não troca o path/ tá em todas as páginas */}
      <Routes>
        {/* troca o path */}
        <Route index element={<HomePage />} />
        <Route path="/profile/:name" element={<ProfilePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};