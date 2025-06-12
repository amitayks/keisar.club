import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"; // Set once
    }

    const savedScrollY = sessionStorage.getItem("scrollPosition");
    if (savedScrollY && window.history.state?.preserveScroll) {
      window.scrollTo(0, parseInt(savedScrollY, 10)); // Restore scroll
    } else {
      window.scrollTo(0, 0); // Scroll to top on new page
    }
  }, [pathname]);

  // Preserve scroll position when navigating back
  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    window.addEventListener("popstate", saveScrollPosition); // Save on back/forward
    return () => window.removeEventListener("popstate", saveScrollPosition);
  }, []);

  return null;
};

export default ScrollToTop;
