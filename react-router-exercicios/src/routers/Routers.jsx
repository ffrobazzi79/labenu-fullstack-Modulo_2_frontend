import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage"
import ProfilePage from "../pages/ProfilePage"
import ProductsPage from "../pages/ProductsPage";

export default function Routers () {
    
    return(
        
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/products/:id" element={<ProductsPage />} />
                <Route path="/error" element={<ErrorPage />}/>
                <Route path="/profile" element={<ProfilePage />}/>
            </Routes>
        
    )
}