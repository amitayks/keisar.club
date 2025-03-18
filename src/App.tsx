import { Routes, Route, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./ui/AppLayout";
import ScrollToTop from "./ui/ScrollToTop";
import HomeLoadingSkeleton from "./ui/skeleton/HomeLoadingSkeleton";

import LazyHome from "./pages/LazyPages/LazyHome";
import LazyAbout from "./pages/LazyPages/LazyAbout";
import LazyProducts from "./pages/LazyPages/LazyProducts";
import LazyPortfolio from "./pages/LazyPages/LazyPortfolio";
import LazyContact from "./pages/LazyPages/LazyContact";

import LazyProductDetail from "./pages/LazyPages/LazyProductDetail";
import LazyOrderForm from "./pages/LazyPages/LazyOrderForm";
import LazyOrderDetail from "./pages/LazyPages/LazyOrderDetail";
import LazyPortfolioDetail from "./pages/LazyPages/LazyPortfolioDetail";

import PageNotFound from "./pages/PageNotFound";

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
            <Route index path='/' element={<LazyHome />} />
            <Route path='/about' element={<LazyAbout />} />
            <Route path='/products' element={<LazyProducts />} />
            <Route path='/products/:SKU' element={<LazyProductDetail />} />
            <Route path='/portfolio' element={<LazyPortfolio />} />
            <Route path='/portfolio/:SKU' element={<LazyPortfolioDetail />} />
            <Route path='/contact' element={<LazyContact />} />
            <Route path='/order' element={<LazyOrderForm />} />
            <Route path='/order/:id' element={<LazyOrderDetail />} />
            <Route path='/skeleton' element={<HomeLoadingSkeleton />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
