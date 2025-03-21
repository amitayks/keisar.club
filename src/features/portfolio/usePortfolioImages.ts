import { useQuery } from "@tanstack/react-query";
import { getProductImage, getProductImagePack } from "../../services/apiImages";
import { usePortfolioImage } from "./usePortfolioImage";

const usePortfolioImages = (imageId: string) => {
  // Fetch main image

  const {
    imageData: mainImage,
    isLoading: isLoadingMainImage,
    error: mainImageError,
  } = usePortfolioImage(imageId);
  // const {
  //   data: mainImage,
  //   isLoading: isLoadingMainImage,
  //   error: mainImageError,
  // } = useQuery({
  //   queryKey: ["portfolioMainImage", imageId],
  //   queryFn: () => getProductImage(imageId),
  //   enabled: !!imageId,
  //   staleTime: 1000 * 60 * 5, // 5 minutes
  // });

  // Fetch image pack (additional images)
  const {
    data: imagePack,
    isLoading: isLoadingImagePack,
    error: imagePackError,
  } = useQuery({
    queryKey: ["portfolioImagePack", imageId],
    queryFn: () => getProductImagePack(imageId),
    enabled: !!imageId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const error = mainImageError || imagePackError;

  return {
    mainImage,
    imagePack,
    isLoadingMainImage,
    isLoadingImagePack,
    error,
  };
};

export default usePortfolioImages;
