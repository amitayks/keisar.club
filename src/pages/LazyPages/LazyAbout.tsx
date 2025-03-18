import { useQuery } from "@tanstack/react-query";
// import AboutLoadingSkeleton from "../../ui/skeleton/AboutLoadingSkeleton";

const loadAbout = async () => {
  const module = await import("../../pages/About");
  return module.default;
};

const LazyAbout = () => {
  const { data: Component, isLoading } = useQuery({
    queryKey: ["aboutComponent"],
    queryFn: loadAbout,
    staleTime: Infinity,
  });

  //   if (isLoading) return <AboutLoadingSkeleton />;
  return Component ? <Component /> : null;
};

export default LazyAbout;
