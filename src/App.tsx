import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import SingleProduct from "./pages/SingleProduct.tsx";
import About from './pages/About.tsx'
import Services from "./pages/Services.tsx";



export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/product/:id" element={<SingleProduct />} />

                <Route path="/about" element={<About />} />
                <Route path="/cartpage" element={<CartPage />} />
                <Route path="/personal-details" element={<PersonalDetails />} />
                <Route path="/final-details" element={<FinalDetails />} />
                {/*<Route path="login" element={<Login />} />*/}

                {/*<Route path="*" element={<PageNotFound />} />*/}
                <Route path="/services" element={<Services />} />
            </Routes>
        </BrowserRouter>
    )
}