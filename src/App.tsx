import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import SingleProduct from "./pages/SingleProduct.tsx";
import About from './pages/About.tsx'
import Services from "./pages/Services.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Shop from "./pages/Shop.tsx";
import UserAuthentication from "./pages/UserAuthentication.tsx";
import Login from "./ui/Authentication/Login.tsx";
import FinalDetails from "./pages/FinalDetails.tsx";




export default function App() {
      const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            // staleTime: 60*1000
            staleTime: 0,
          },
        },
      });
    return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/product/:productId" element={<SingleProduct />} />

            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/final-details" element={<FinalDetails/>} />
            <Route path="/register" element={<UserAuthentication />} />
            <Route path="/login" element ={<Login />} />
            {/*<Route path="*" element={<PageNotFound />} />*/}
            <Route path="/services" element={<Services />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    );
}