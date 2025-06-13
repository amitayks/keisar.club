import { useQueries, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPortfolioImage } from "../services/apiImages";
import { getPortfolioById } from "../services/apiPortfolio";
import { PortfolioItem } from "../types/portfolio";

const usePortfolioItem = () => {
  const { SKU } = useParams<{ SKU: string }>();

  const {
    data: portfolioItem,
    error: portfolioError,
    isLoading: isLoadingPortfolio,
  } = useQuery<PortfolioItem, Error>({
    queryKey: ["portfolioItem", SKU],
    queryFn: () => getPortfolioById(SKU || ""),
    enabled: !!SKU,
    retry: 1,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const { data: image, isLoading: isLoadingImage } = useQuery<
    string | null,
    Error
  >({
    queryKey: ["portfolioImage", portfolioItem?.image],
    queryFn: () =>
      portfolioItem?.image
        ? getPortfolioImage(portfolioItem.image)
        : Promise.resolve(null),
    enabled: !!portfolioItem?.image,
  });

  const imagePackQueries = useQueries({
    queries: (portfolioItem?.imagePack.slice(0, 4) || []).map(
      (image: string) => ({
        queryKey: ["portfolioImage", image],
        queryFn: () => getPortfolioImage(image),
      })
    ),
  });

  const imagePack = imagePackQueries.map((query) => ({
    url: query.data || null,
    error: query.error || null,
    isLoading: query.isLoading,
  }));

  const isLoadingImagePack = imagePackQueries.some((query) => query.isLoading);

  return {
    error: portfolioError,
    portfolioItem: portfolioItem || null,
    image: image || null,
    imagePack,
    isLoadingPortfolio,
    isLoadingImage,
    isLoadingImagePack,
  };
};

export default usePortfolioItem;
