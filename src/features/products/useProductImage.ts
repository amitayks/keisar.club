import { useQuery } from "@tanstack/react-query";
import { getProductImage } from "../../services/apiImages";
// import { useParams } from "react-router-dom";

const useProductImage = (image: string) => {
  const { data: imageData, isLoading } = useQuery({
    queryKey: ["productImage", image],
    queryFn: () => getProductImage(image),
  });

  return { imageData, isLoading };
};

export { useProductImage };
