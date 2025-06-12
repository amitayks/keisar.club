import { useQuery } from "@tanstack/react-query";
import { getSiteImage } from "../services/apiImages";

const useSiteImage = (imageName: string) => {
  const {
    data: image,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["image", imageName],
    queryFn: () => getSiteImage(imageName),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { image, error, isLoading };
};

export { useSiteImage };
