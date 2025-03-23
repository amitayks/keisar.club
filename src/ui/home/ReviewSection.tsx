import { useState, useEffect, useCallback } from "react";
import { Quote } from "lucide-react";
import { Skeleton } from "../skeleton/Skeleton";
import useReviews from "../../hooks/useReviews";

function ReviewSection() {
  const { reviews, isLoading } = useReviews();
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedReview, setDisplayedReview] = useState<
    typeof reviews[0] | null
  >(null);

  // Set initial review once data is loaded
  useEffect(() => {
    if (!isLoading && reviews.length > 0 && !displayedReview) {
      setDisplayedReview(reviews[0]);
    }
  }, [isLoading, reviews, displayedReview]);

  // Handle automatic review rotation
  useEffect(() => {
    if (reviews.length <= 1) return;

    const rotationInterval = setInterval(() => {
      rotateReview();
    }, 8000); // Change review every 8 seconds

    return () => clearInterval(rotationInterval);
  }, [currentReviewIndex, reviews.length]);

  // Function to rotate to the next review with transition
  const rotateReview = useCallback(() => {
    if (reviews.length <= 1) return;

    setIsTransitioning(true);

    // After fade out, change to next review
    setTimeout(() => {
      const nextIndex = (currentReviewIndex + 1) % reviews.length;
      setCurrentReviewIndex(nextIndex);
      setDisplayedReview(reviews[nextIndex]);

      // After changing review, fade back in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 500); // Match this with the CSS transition duration
  }, [currentReviewIndex, reviews]);

  return (
    <section className='py-16 bg-zinc-200 dark:bg-zinc-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* <div className='text-center mb-10'>
          <h2 className='text-3xl font-bold text-stone-900 dark:text-stone-200 mb-2'>
            Customer Reviews
          </h2>
          <p className='text-stone-600 dark:text-stone-400'>
            See what our customers have to say about our products and services
          </p>
        </div> */}

        <div className='bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 md:p-8 min-h-[320px] flex items-center justify-center relative'>
          {isLoading ? (
            <ReviewSkeleton />
          ) : reviews.length === 0 ? (
            <p className='text-stone-600 dark:text-stone-400 text-center'>
              No reviews available at this time.
            </p>
          ) : (
            <div
              className={`w-full transition-opacity duration-500 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              {/* <div className='flex justify-center mb-6'>
                <Quote className='h-8 w-8 text-indigo-400 dark:text-indigo-300' />
                <p className='text-indigo-400 dark:text-indigo-300 px-2'>
                  the costumer say
                </p>
                <Quote className='h-8 w-8 text-indigo-400 dark:text-indigo-300' />
              </div> */}

              <blockquote className='text-xl md:text-2xl text-center text-stone-800 dark:text-stone-200 mb-8 italic'>
                "{displayedReview?.text}"
              </blockquote>

              {/* <div className='flex flex-col items-center'>
                <div className='w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-3'>
                  <span className='text-indigo-700 dark:text-indigo-300 font-bold text-xl'>
                    {displayedReview?.name.charAt(0)}
                  </span>
                </div>
                <p className='text-lg font-semibold text-stone-900 dark:text-stone-200'>
                  {displayedReview?.name}
                </p>
                <p className='text-stone-600 dark:text-stone-400'>
                  {displayedReview?.location}
                </p>
              </div> */}

              {/* Review navigation dots */}
              {reviews.length > 1 && (
                <div className='flex justify-center mt-8 space-x-2'>
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (index !== currentReviewIndex) {
                          setCurrentReviewIndex(index);
                          rotateReview();
                        }
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentReviewIndex
                          ? "bg-indigo-600 dark:bg-indigo-400 w-6"
                          : "bg-stone-300 dark:bg-stone-700"
                      }`}
                      aria-label={`View review ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Skeleton for review during loading
const ReviewSkeleton = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-center mb-6'>
        <Skeleton className='h-12 w-12 rounded-full' />
      </div>

      <div className='space-y-3 mb-8'>
        <Skeleton className='h-6 w-3/4 mx-auto' />
        <Skeleton className='h-6 w-5/6 mx-auto' />
        <Skeleton className='h-6 w-2/3 mx-auto' />
      </div>

      <div className='flex flex-col items-center'>
        <Skeleton className='w-12 h-12 rounded-full mb-3' />
        <Skeleton className='h-5 w-32 mb-2' />
        <Skeleton className='h-4 w-24' />
      </div>
    </div>
  );
};

export default ReviewSection;
