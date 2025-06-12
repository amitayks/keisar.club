import { useQuery } from "@tanstack/react-query";
import { getPortfolioImage } from "../services/apiImages";

const usePortfolioImage = (imageName: string) => {
  const {
    data: image,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["portfolioImage", imageName],
    queryFn: () => getPortfolioImage(imageName),
    staleTime: 1000 * 60 * 60 * 24, // 5 minutes
    retry: 1,
  });

  return { image, isLoading, error };
};

export { usePortfolioImage };
