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
import CartPage from "./pages/CartPage.tsx";
import Blog from "./pages/Blog.tsx";
import Blog1 from "./ui/blog/Blog1.tsx";
import Blog2 from "./ui/blog/Blog2.tsx";
import Blog3 from "./ui/blog/Blog3.tsx"
import Blog4 from "./ui/blog/Blog4.tsx"




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
          <Route path="/cart" element={<CartPage />} />
          <Route path="/final-details" element={<FinalDetails />} />
          <Route path="/register" element={<UserAuthentication />} />
          <Route path="/login" element={<Login />} />
          {/*<Route path="*" element={<PageNotFound />} />*/}
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/make-your-scent-last-all-day" element={<Blog1 />} />
          <Route path="/blog/choosing-the-perfect-fragrance-for-every-season" element={<Blog2 />} />
          <Route path="/blog/find-your-signature-scent" element={<Blog3 />} />
          <Route path="/blog/discover-the-different-types-of-perfumes" element={<Blog4 />} />


        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}