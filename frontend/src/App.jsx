import MainLayout from "./components/layout/MainLayout"
import LandingPage from "./pages/LandingPage"
import CategoriesPage from "./pages/CategoriesPage";
import CategoriesProductsPage from "./pages/CategoriesProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<LandingPage/>}/>
            <Route path="categories" element={<CategoriesPage/>}/>
            <Route path="categories/:id" element={<CategoriesProductsPage/>}/>
            <Route path="categories/product/:id" element={<ProductDetailsPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
