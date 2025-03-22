import { Routes, Route, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./ui/AppLayout";
import ScrollToTop from "./ui/ScrollToTop";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Portfolio from "./pages/Portfolio";

import PageNotFound from "./pages/PageNotFound";

import LazyAbout from "./pages/LazyPages/LazyAbout";
import LazyContact from "./pages/LazyPages/LazyContact";
import LazyOrderForm from "./pages/LazyPages/LazyOrderForm";
import LazyOrderDetail from "./pages/LazyPages/LazyOrderDetail";
import LazyPortfolioDetail from "./pages/LazyPages/LazyPortfolioDetail";

import Favicon from "./ui/Favicon";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <ScrollToTop />
        <Favicon />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:SKU' element={<ProductDetail />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/portfolio/:SKU' element={<LazyPortfolioDetail />} />
            <Route path='/about' element={<LazyAbout />} />
            <Route path='/contact' element={<LazyContact />} />
            <Route path='/order' element={<LazyOrderForm />} />
            <Route path='/order/:id' element={<LazyOrderDetail />} />
            {/* <Route path='/skeleton' element={<LazyProductDetail />} /> */}
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
