import { useQuery } from "@tanstack/react-query";
import { getSiteImage } from "../services/apiImages";

const useSiteImage = (imageName: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["image", imageName],
    queryFn: () => getSiteImage(imageName),
    staleTime: 1000 * 60 * 60 * 24,
    // gcTime: 1000 * 60 * 60 * 24,
    // retry: 1,
  });

  if (error) console.log(error);
  // if (isLoading) console.log("Loading...");

  return { data, error, isLoading };
};

export { useSiteImage };
