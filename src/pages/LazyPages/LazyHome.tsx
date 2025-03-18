import { useEffect, useState } from "react";
import HomeLoadingSkeleton from "../../ui/skeleton/HomeLoadingSkeleton";
import { useQuery } from "@tanstack/react-query";

const loadHome = async () => {
  const module = await import("../../pages/Home");
  return module.default;
};

const LazyHome = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { data: Component, isLoading } = useQuery({
    queryKey: ["homeComponent"],
    queryFn: loadHome,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (!isLoading && Component) {
      // Add a short delay before transitioning to ensure skeleton has rendered completely
      setIsTransitioning(true);
      const timer = setTimeout(() => setIsTransitioning(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading, Component]);

  return (
    <div className='relative min-h-screen'>
      {/* Always render skeleton during loading or transition */}
      {(isLoading || isTransitioning) && (
        <div
          className={`absolute inset-0 z-10 ${
            !isLoading ? "animate-fadeOut" : "animate-fadeIn"
          }`}
        >
          <HomeLoadingSkeleton />
        </div>
      )}

      {/* Render actual content but keep it invisible during loading */}
      {Component && !isLoading && (
        <div className={`${isTransitioning ? "opacity-0" : "animate-fadeIn"}`}>
          <Component />
        </div>
      )}
    </div>
  );
};

export default LazyHome;
