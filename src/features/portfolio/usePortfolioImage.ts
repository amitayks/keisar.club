import { useQuery } from "@tanstack/react-query";
import { getProductImage } from "../../services/apiImages";
// import { useParams } from "react-router-dom";

const usePortfolioImage = (image: string) => {
  const { data: imageData, isLoading } = useQuery({
    queryKey: ["portfolioImage", image],
    queryFn: () => getProductImage(image),
  });

  return { imageData, isLoading };
};

export { usePortfolioImage };
