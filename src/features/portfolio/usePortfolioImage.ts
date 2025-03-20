import { useQuery } from "@tanstack/react-query";
import { getProductImage } from "../../services/apiImages";

const usePortfolioImage = (image: string) => {
  const {
    data: imageData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["portfolioImage", image],
    queryFn: () => getProductImage(image),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });

  return { imageData, isLoading, error };
};

export { usePortfolioImage };
