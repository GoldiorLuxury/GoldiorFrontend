import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import SingleProduct from "./pages/SingleProduct.tsx";
import CartPage from "./pages/CartPage.tsx"


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/product/:id" element={<SingleProduct />} />
                <Route path="/cartpage" element={<CartPage />} />
                {/*<Route path="login" element={<Login />} />*/}
                {/*<Route path="*" element={<PageNotFound />} />*/}
            </Routes>
        </BrowserRouter>
    )
}