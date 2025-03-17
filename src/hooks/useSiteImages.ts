import { useQuery } from "@tanstack/react-query";
import { getSiteImage } from "../services/apiImages";

const useSiteImage = (imageName: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["image", imageName],
    queryFn: () => getSiteImage(imageName),
    // retry: false,
  });

  if (error) console.log(error);
  // if (isLoading) console.log("Loading...");

  return { data, error, isLoading };
};

export { useSiteImage };
