import { useQuery } from "@tanstack/react-query";
// import ContactLoadingSkeleton from "../../ui/skeleton/ContactLoadingSkeleton";

const loadContact = async () => {
  const module = await import("../../pages/Contact");
  return module.default;
};

const LazyContact = () => {
  const { data: Component, isLoading } = useQuery({
    queryKey: ["contactComponent"],
    queryFn: loadContact,
    staleTime: Infinity,
  });

  //   if (isLoading) return <ContactLoadingSkeleton />;
  return Component ? <Component /> : null;
};

export default LazyContact;
