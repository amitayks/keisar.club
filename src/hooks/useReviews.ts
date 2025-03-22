import { useQuery } from "@tanstack/react-query";

// Type for a customer review
export type Review = {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
};

// Mock function to get reviews - replace with actual API call
const getReviews = async (): Promise<Review[]> => {
  // Simulate API request
  await new Promise((resolve) => setTimeout(resolve, 600));

  // Mock data
  return [
    {
      id: "1",
      name: "David Cohen",
      location: "Tel Aviv",
      rating: 5,
      text: "The craftsmanship is simply outstanding. I ordered a custom piece and was blown away by the attention to detail and quality of the wood. Highly recommended!",
      date: "2023-05-12",
    },
    {
      id: "2",
      name: "Sarah Levi",
      location: "Jerusalem",
      rating: 5,
      text: "Exceptional service and the finished product exceeded my expectations. The wood grain is beautiful and the finish is perfect. Will definitely order again.",
      date: "2023-06-22",
    },
    {
      id: "3",
      name: "Michael Rosen",
      location: "Haifa",
      rating: 4,
      text: "Very pleased with my purchase. The delivery was prompt and the product was exactly as described. The attention to detail is remarkable.",
      date: "2023-07-15",
    },
    {
      id: "4",
      name: "Rachel Goldstein",
      location: "Beersheba",
      rating: 5,
      text: "I've purchased multiple items and have always been impressed. The quality is consistent and the customer service is fantastic. A truly special business.",
      date: "2023-08-04",
    },
  ];
};

const useReviews = () => {
  const {
    data: reviews = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: getReviews,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return { reviews, isLoading, error };
};

export default useReviews;
