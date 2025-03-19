import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Info } from "lucide-react";
import useProduct, { Product } from "../features/products/useProduct";
import Spinner from "../ui/Spinner";
import { Skeleton } from "../ui/skeleton/Skeleton";
import ImageThumbnail from "../ui/ImageThumbnail";
import CategoryTag from "../ui/CategoryCard";
import { formatCurrency } from "../utils/helpers";
import ProductTable from "../features/products/ProductTable";

type useProductType = {
  product: Product | null;
  image: string | null;
  imagePack: { url: string | null; error: Error | null; isLoading: boolean }[];
  isLoadingProduct: boolean;
  isLoadingImage: boolean;
  isLoadingImagePack: boolean;
  error: Error | null;
};

const ProductDetail = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const {
    product,
    image,
    imagePack,
    isLoadingProduct,
    isLoadingImage,
    isLoadingImagePack,
    error,
  }: useProductType = useProduct();

  useEffect(() => {
    if (image) {
      setSelectedImage(image);
    }
  }, [image]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const handleOrder = () => {
    navigate("/order", {
      state: {
        productId: product?.id,
        productName: product?.name,
        quantity: quantity,
      },
    });
  };

  // Create placeholder data for loading state
  const placeholderProduct: Product = {
    SKU: "",
    description: "",
    reviews: 0,
    image: "",
    imagePack: [],
    id: "loading",
    name: "",
    price: 0,
    rating: 0,
    stock: 0,
    category: [],
    longDescription: "",
    wood: "",
    weight: "",
    height: "",
    length: "",
    width: "",
    shipmentPrice: 0,
  };

  const currentProduct = product || placeholderProduct;

  return (
    <div className='dark:bg-zinc-900 dark:text-white min-h-screen' dir='rtl'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Breadcrumb */}
        <Breadcrumb product={currentProduct} isLoading={isLoadingProduct} />

        {/* Product Details */}
        <div className='lg:grid lg:grid-cols-2 lg:gap-x-8'>
          {/* Product Images */}
          <ProductImages
            image={image}
            imagePack={imagePack}
            isLoadingImage={isLoadingImage || isLoadingProduct}
            isLoadingImagePack={isLoadingImagePack || isLoadingProduct}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            name={currentProduct.name}
          />

          {/* Product Info */}
          <div className='space-y-6'>
            {/* Product Title and Rating */}
            <div className='flex justify-between items-center'>
              {isLoadingProduct ? (
                <Skeleton className='h-10 w-3/4' />
              ) : (
                <h1 className='text-3xl font-extrabold text-zinc-900 dark:text-stone-200'>
                  {currentProduct.name}
                </h1>
              )}
              <Rating product={currentProduct} isLoading={isLoadingProduct} />
            </div>

            {/* Description */}
            <Description
              product={currentProduct}
              isLoading={isLoadingProduct}
            />

            {/* Features */}
            <FeaturesTable
              product={currentProduct}
              isLoading={isLoadingProduct}
            />

            {/* Stock Status */}
            <StockStatus
              product={currentProduct}
              isLoading={isLoadingProduct}
            />

            {/* Order Form */}
            <div className='border-t border-stone-200 dark:border-stone-700 pt-6 space-y-4'>
              <div className='flex items-center justify-between'>
                <Price product={currentProduct} isLoading={isLoadingProduct} />
                <Quantity
                  quantity={quantity}
                  setQuantity={setQuantity}
                  handleQuantityChange={handleQuantityChange}
                  isDisabled={isLoadingProduct}
                />
              </div>
              <OrderButton
                handleOrder={handleOrder}
                isDisabled={isLoadingProduct}
              />
              <Message />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

function FeaturesTable({
  product,
  isLoading,
}: {
  product: Product;
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <div className='mb-8'>
        <h2 className='text-lg font-semibold text-zinc-900 dark:text-stone-200 mb-2'>
          מידע נוסף
        </h2>
        <Skeleton className='h-48 w-full' />
      </div>
    );
  }

  return (
    <div className='mb-8'>
      <h2 className='text-lg font-semibold text-zinc-900 dark:text-stone-200 mb-2'>
        מידע נוסף
      </h2>
      <div className='text-stone-600 dark:text-stone-400 space-y-2'>
        <div className='flex justify-between py-2'>
          <span className='font-medium'>Wood</span>
          <span>{product?.wood}</span>
        </div>
        <div className='flex justify-between py-2'>
          <span className='font-medium'>Weight</span>
          <span>{product.weight}</span>
        </div>
        <div className='flex justify-between py-2'>
          <span className='font-medium'>Height</span>
          <span>{product.height}</span>
        </div>
        <div className='flex justify-between py-2'>
          <span className='font-medium'>Length</span>
          <span>{product.length}</span>
        </div>
        <div className='flex justify-between py-2'>
          <span className='font-medium'>Width</span>
          <span>{product.width}</span>
        </div>
        <div className='flex justify-between py-2'>
          <span className='font-medium'>Shipment Price</span>
          <span>
            {product.shipmentPrice
              ? formatCurrency(product.shipmentPrice)
              : formatCurrency(0)}
          </span>
        </div>
      </div>
    </div>
  );
}

function Description({
  product,
  isLoading,
}: {
  product: Product;
  isLoading: boolean;
}) {
  return (
    <div className='mb-6'>
      <h2 className='text-lg font-semibold text-zinc-900 dark:text-stone-200 mb-2'>
        תיאור
      </h2>
      {isLoading ? (
        <div className='space-y-2'>
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-5/6' />
          <Skeleton className='h-4 w-4/6' />
        </div>
      ) : (
        <p className='text-stone-600 dark:text-stone-400'>
          {product.longDescription}
        </p>
      )}
    </div>
  );
}

function Quantity({
  quantity,
  setQuantity,
  handleQuantityChange,
  isDisabled,
}: {
  quantity: number;
  setQuantity: (quantity: number) => void;
  handleQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
}) {
  return (
    <div className='flex items-center'>
      <button
        type='button'
        onClick={() => setQuantity(quantity + 1)}
        className='p-2 border border-stone-300 dark:border-stone-700 rounded-r-md bg-stone-50 text-stone-500 hover:bg-stone-100 dark:bg-zinc-900 dark:text-white disabled:opacity-50'
        disabled={isDisabled}
      >
        +
      </button>
      <input
        type='number'
        id='quantity'
        name='quantity'
        min='1'
        value={quantity}
        onChange={handleQuantityChange}
        className='p-2 w-16 border-t border-b border-stone-300 dark:border-stone-700 text-center focus:ring-indigo-500 focus:border-indigo-500 rounded-none dark:bg-zinc-900 dark:text-white disabled:opacity-50'
        disabled={isDisabled}
      />
      <button
        type='button'
        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
        className='p-2 border border-stone-300 dark:border-stone-700 rounded-l-md bg-stone-50 text-stone-500 hover:bg-stone-100 dark:bg-zinc-900 dark:text-white disabled:opacity-50'
        disabled={isDisabled}
      >
        -
      </button>
      <label
        htmlFor='quantity'
        className='block text-sm font-medium text-stone-600 dark:text-stone-400 mr-4'
      >
        Quantity
      </label>
    </div>
  );
}

function OrderButton({
  handleOrder,
  isDisabled,
}: {
  handleOrder: () => void;
  isDisabled: boolean;
}) {
  return (
    <div className='flex flex-col sm:flex-row gap-4'>
      <Link
        to='/contact'
        className='flex-1 bg-stone-100 text-stone-800 px-6 py-3 rounded-md font-medium hover:bg-stone-200 transition-colors flex items-center justify-center disabled:opacity-50'
      >
        Ask a Question
        <Info className='h-5 w-5 mr-2' />
      </Link>
      <button
        type='button'
        onClick={handleOrder}
        disabled={isDisabled}
        className='flex-1 bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center disabled:opacity-50'
      >
        Order Now
        <ShoppingCart className='h-5 w-5 mr-2' />
      </button>
    </div>
  );
}

function StockStatus({
  product,
  isLoading,
}: {
  product: Product;
  isLoading: boolean;
}) {
  if (isLoading) {
    return <Skeleton className='h-6 w-24 mb-6' />;
  }

  return (
    <div className='flex items-center gap-2 mb-6'>
      <div
        className={`h-3 w-3 rounded-full ${
          product?.stock === 0 ? "bg-red-500" : "bg-green-500"
        }`}
      ></div>
      <span className='text-sm font-medium text-stone-600 dark:text-stone-400'>
        in stock: {product.stock}
      </span>
    </div>
  );
}

function Price({
  product,
  isLoading,
}: {
  product: Product;
  isLoading: boolean;
}) {
  if (isLoading) {
    return <Skeleton className='h-8 w-32' />;
  }

  return (
    <p className='text-3xl font-bold text-zinc-900 dark:text-stone-200'>
      {formatCurrency(product.price)}
    </p>
  );
}

function Message() {
  return (
    <p className='text-sm text-stone-500 dark:text-stone-400 flex items-center gap-2'>
      <Info className='h-4 w-4' />
      להזמנות גדולות ניתן לפנות לשירות לקוחות
    </p>
  );
}

function Rating({
  product,
  isLoading,
}: {
  product: Product;
  isLoading: boolean;
}) {
  if (isLoading) {
    return <Skeleton className='h-5 w-28' />;
  }

  return (
    <div className='flex items-center'>
      <div className='flex items-center'>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 ${
              i < Math.floor(product.rating)
                ? "text-yellow-400"
                : "text-gray-300 dark:text-stone-400"
            }`}
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
          </svg>
        ))}
      </div>
      <span className='ml-2 text-sm text-gray-600 dark:text-stone-400'>
        {product.rating}
      </span>
    </div>
  );
}

function Breadcrumb({
  product,
  isLoading,
}: {
  product: Product;
  isLoading: boolean;
}) {
  return (
    <nav
      className='flex items-center justify-between text-sm font-medium mb-8'
      dir='ltr'
    >
      <Link
        to='/products'
        className='hover:text-gray-900 dark:hover:text-white flex items-center'
      >
        <ArrowLeft className='h-4 w-4 mr-1' />
        Back to Products
      </Link>
      {isLoading ? (
        <Skeleton className='h-6 w-24' />
      ) : (
        <CategoryTag cat={product.category as string[]} type='detail' />
      )}
    </nav>
  );
}

function ProductImages({
  isLoadingImage,
  isLoadingImagePack,
  image,
  imagePack,
  selectedImage,
  setSelectedImage,
  name,
}: {
  isLoadingImage: boolean;
  isLoadingImagePack: boolean;
  image: string | null;
  imagePack: { url: string | null; error: Error | null; isLoading: boolean }[];
  selectedImage: string | null;
  setSelectedImage: (imageUrl: string) => void;
  name: string;
}) {
  return (
    <div className='mb-8 lg:mb-0'>
      {/* Main image with consistent height */}
      <div className='aspect-square w-full rounded-lg overflow-hidden mb-4'>
        {isLoadingImage || !selectedImage ? (
          <Skeleton className='w-full h-full' />
        ) : (
          <img
            src={selectedImage}
            alt={name}
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
            imagePack.map((imageItem, i) => {
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
                      alt={`${name} thumbnail ${i + 1}`}
                      className='w-full h-full object-cover'
                    />
                  )}
                </div>
              );
            })}
      </div>
    </div>
  );
}
