import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ScrollToTop from "./ui/ScrollToTop";
import AppLayout from "./ui/AppLayout";
import HomeLoadingSkeleton from "./ui/skeleton/HomeLoadingSkeleton";

const Home = lazy(() => import("./ui/home/Home"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const OrderForm = lazy(() => import("./pages/OrderForm"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const OrderDetail = lazy(() => import("./pages/OrderDetail"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const PortfolioItem = lazy(() => import("./features/portfolio/PortfolioItem"));

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
        <Suspense fallback={<HomeLoadingSkeleton />}>
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
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
