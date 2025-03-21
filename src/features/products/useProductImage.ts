import { useQuery } from "@tanstack/react-query";
import { getProductImage } from "../../services/apiImages";
// import { useParams } from "react-router-dom";

const useProductImage = (image: string) => {
  const { data: imageData, isLoading } = useQuery({
    queryKey: ["productImage", image],
    queryFn: () => getProductImage(image),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });

  return { imageData, isLoading };
};

export { useProductImage };
