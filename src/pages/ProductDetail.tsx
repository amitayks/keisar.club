import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useProductItem, { Product } from "../features/products/useProductItem";

import { Skeleton } from "../ui/skeleton/Skeleton";
import { Info } from "lucide-react";

import ProductImages from "../features/products/ProductImages";
import ProductQuantity from "../features/products/ProductQuantity";
import ProductDescription from "../features/products/ProductDescription";
import ProductTable from "../features/products/ProductTable";
import StockStatus from "../features/products/StockStatus";
import ProductPrice from "../features/products/ProductPrice";
import ProductRating from "../features/products/ProductRating";
import Breadcrumb from "../features/products/ProductBreadcrumb";
import ProductOrderButton from "../features/products/ProductOrderButton";

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
  }: useProductType = useProductItem();

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
    additionalInfo: [],
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
              <ProductRating
                product={currentProduct}
                isLoading={isLoadingProduct}
              />
            </div>

            {/* Description */}
            <ProductDescription
              product={currentProduct}
              isLoading={isLoadingProduct}
            />

            {/* Features */}
            <ProductTable
              additionalInfo={currentProduct.additionalInfo}
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
                <ProductPrice
                  product={currentProduct}
                  isLoading={isLoadingProduct}
                />
                <ProductQuantity
                  quantity={quantity}
                  setQuantity={setQuantity}
                  handleQuantityChange={handleQuantityChange}
                  isDisabled={isLoadingProduct}
                />
              </div>
              <ProductOrderButton
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

function Message() {
  return (
    <p className='text-sm text-stone-500 dark:text-stone-400 flex items-center gap-2'>
      <Info className='h-4 w-4' />
      להזמנות גדולות ניתן לפנות לשירות לקוחות
    </p>
  );
}
