import { useQuery } from "@tanstack/react-query";
import getImage from "../services/apiImages";

const useGetImage = (imageId: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["image", imageId],
    queryFn: () => getImage(imageId),
  });

  if (error) console.log(error);
  if (isLoading) console.log("Loading...");

  return { data, error, isLoading };
};

export default useGetImage;
