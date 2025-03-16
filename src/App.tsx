import { Routes, Route, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ScrollToTop from "./ui/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import OrderForm from "./pages/OrderForm";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import OrderDetail from "./pages/OrderDetail";
import Portfolio from "./pages/Portfolio";
import PortfolioItem from "./features/portfolio/PortfolioItem";

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
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:SKU' element={<ProductDetail />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/order' element={<OrderForm />} />
            <Route path='/order/:id' element={<OrderDetail />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/portfolio/:SKU' element={<PortfolioItem />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
