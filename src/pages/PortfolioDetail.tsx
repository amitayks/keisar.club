import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Tag, ExternalLink } from "lucide-react";
import { Skeleton } from "../ui/skeleton/Skeleton";
import CategoryTag from "../ui/CategoryCard";
import usePortfolioItem from "../features/portfolio/usePortfolioItem";
import usePortfolioImages from "../features/portfolio/usePortfolioImages";

type PortfolioItemType = {
  id: string;
  title: string;
  content: string;
  description: string;
  date: string;
  client: string;
  category: string[];
  image: string;
  SKU: string;
  externalLink?: string;
};

type PortfolioImageType = {
  url: string | null;
  error: Error | null;
  isLoading: boolean;
};

const PortfolioDetail = () => {
  const { sku } = useParams<{ sku: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const {
    portfolioItem,
    isLoadingItem,
    error: itemError,
  } = usePortfolioItem(sku || "");

  const {
    mainImage,
    imagePack,
    isLoadingMainImage,
    isLoadingImagePack,
    error: imageError,
  } = usePortfolioImages(portfolioItem?.image || "");

  useEffect(() => {
    if (mainImage) {
      setSelectedImage(mainImage);
    }
  }, [mainImage]);

  // Handle errors
  useEffect(() => {
    if (itemError || imageError) {
      console.error("Error loading portfolio item:", itemError || imageError);
    }
  }, [itemError, imageError]);

  // Create placeholder data for loading state
  const placeholderItem: PortfolioItemType = {
    id: "loading",
    title: "",
    content: "",
    description: "",
    date: "",
    client: "",
    category: [],
    image: "",
    SKU: "",
  };

  const currentItem = portfolioItem || placeholderItem;

  return (
    <div className='dark:bg-zinc-900 dark:text-white min-h-screen' dir='rtl'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Breadcrumb */}
        <nav
          className='flex items-center justify-between text-sm font-medium mb-8'
          dir='ltr'
        >
          <Link
            to='/portfolio'
            className='hover:text-gray-900 dark:hover:text-white flex items-center'
          >
            <ArrowLeft className='h-4 w-4 mr-1' />
            Back to Portfolio
          </Link>
          {isLoadingItem ? (
            <Skeleton className='h-6 w-24' />
          ) : (
            <CategoryTag cat={currentItem.category} type='detail' />
          )}
        </nav>

        {/* Portfolio Details */}
        <div className='lg:grid lg:grid-cols-2 lg:gap-x-8'>
          {/* Portfolio Images */}
          <div className='mb-8 lg:mb-0'>
            {/* Main image with consistent height */}
            <div className='aspect-square w-full rounded-lg overflow-hidden mb-4'>
              {isLoadingMainImage || !selectedImage ? (
                <Skeleton className='w-full h-full' />
              ) : (
                <img
                  src={selectedImage}
                  alt={currentItem.title}
                  className='w-full h-full object-cover'
                />
              )}
            </div>

            {/* Thumbnail Images */}
            <div className='grid grid-cols-4 gap-2'>
              {isLoadingImagePack
                ? Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className='aspect-square rounded-md overflow-hidden'
                      >
                        <Skeleton className='w-full h-full' />
                      </div>
                    ))
                : imagePack &&
                  imagePack.map((imageItem: PortfolioImageType, i: number) => {
                    if (!imageItem.url) {
                      return (
                        <div
                          key={i}
                          className='aspect-square rounded-md overflow-hidden'
                        >
                          <Skeleton className='w-full h-full' />
                        </div>
                      );
                    }

                    return (
                      <div
                        key={i}
                        className={`aspect-square cursor-pointer rounded-md overflow-hidden ${
                          selectedImage === imageItem.url
                            ? "ring-2 ring-indigo-500"
                            : ""
                        }`}
                        onClick={() =>
                          imageItem.url && setSelectedImage(imageItem.url)
                        }
                      >
                        {imageItem.isLoading ? (
                          <Skeleton className='w-full h-full' />
                        ) : (
                          <img
                            src={imageItem.url}
                            alt={`${currentItem.title} thumbnail ${i + 1}`}
                            className='w-full h-full object-cover'
                          />
                        )}
                      </div>
                    );
                  })}
            </div>
          </div>

          {/* Portfolio Info */}
          <div className='space-y-6'>
            {/* Portfolio Title */}
            <div>
              {isLoadingItem ? (
                <Skeleton className='h-10 w-3/4 mb-2' />
              ) : (
                <h1 className='text-3xl font-extrabold text-zinc-900 dark:text-stone-200 mb-2'>
                  {currentItem.title}
                </h1>
              )}

              {/* Client & Date */}
              <div className='flex flex-wrap gap-4 text-stone-600 dark:text-stone-400 mb-4'>
                {isLoadingItem ? (
                  <>
                    <Skeleton className='h-6 w-32' />
                    <Skeleton className='h-6 w-40' />
                  </>
                ) : (
                  <>
                    {currentItem.client && (
                      <div className='flex items-center'>
                        <Tag className='h-4 w-4 mr-2' />
                        <span>{currentItem.client}</span>
                      </div>
                    )}
                    {currentItem.date && (
                      <div className='flex items-center'>
                        <Calendar className='h-4 w-4 mr-2' />
                        <span>{currentItem.date}</span>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className='text-lg font-semibold text-zinc-900 dark:text-stone-200 mb-2'>
                תיאור הפרויקט
              </h2>
              {isLoadingItem ? (
                <div className='space-y-2'>
                  <Skeleton className='h-4 w-full' />
                  <Skeleton className='h-4 w-5/6' />
                  <Skeleton className='h-4 w-4/6' />
                </div>
              ) : (
                <p className='text-stone-600 dark:text-stone-400'>
                  {currentItem.description}
                </p>
              )}
            </div>

            {/* Content */}
            <div>
              <h2 className='text-lg font-semibold text-zinc-900 dark:text-stone-200 mb-2'>
                פרטים נוספים
              </h2>
              {isLoadingItem ? (
                <div className='space-y-2'>
                  <Skeleton className='h-4 w-full' />
                  <Skeleton className='h-4 w-5/6' />
                  <Skeleton className='h-4 w-full' />
                  <Skeleton className='h-4 w-4/6' />
                </div>
              ) : (
                <div
                  className='text-stone-600 dark:text-stone-400 portfolio-content'
                  dangerouslySetInnerHTML={{ __html: currentItem.content }}
                />
              )}
            </div>

            {/* External Link */}
            {!isLoadingItem && currentItem.externalLink && (
              <div className='pt-6 border-t border-stone-200 dark:border-stone-700'>
                <a
                  href={currentItem.externalLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors'
                >
                  View Project
                  <ExternalLink className='h-5 w-5 ml-2' />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
