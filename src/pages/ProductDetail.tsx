import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Check, Info } from "lucide-react";
import useProduct from "../features/products/useProduct";
import Spinner from "../ui/Spinner";
const ProductDetail = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");

  const { product, isLoading } = useProduct();

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
    }
  }, [product]);

  if (isLoading) return <Spinner />;

  const additionalImages = [
    "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  ];

  // const product = products.at(1);

  if (!product) {
    return (
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center'>
        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
          Product Not Found
        </h2>
        <p className='text-gray-600 mb-8'>
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to='/products'
          className='bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors'
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const handleOrder = () => {
    navigate("/order", {
      state: {
        productId: product.id,
        productName: product.name,
        quantity: quantity,
      },
    });
  };

  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Breadcrumb */}
        <nav className='flex items-center text-sm font-medium text-gray-500 mb-8'>
          <Link
            to='/products'
            className='hover:text-gray-900 flex items-center'
          >
            <ArrowLeft className='h-4 w-4 mr-1' />
            Back to Products
          </Link>
        </nav>

        {/* Product Details */}
        <div className='lg:grid lg:grid-cols-2 lg:gap-x-8'>
          {/* Product Images */}
          <div className='mb-8 lg:mb-0'>
            <div className='overflow-hidden rounded-lg mb-4'>
              <img
                src={selectedImage}
                alt={product.name}
                className='w-full h-96 object-cover'
              />
            </div>

            {/* Thumbnail Images */}
            {additionalImages && additionalImages.length > 0 && (
              <div className='grid grid-cols-4 gap-2'>
                <div
                  className={`cursor-pointer rounded-md overflow-hidden ${
                    selectedImage === product.image
                      ? "ring-2 ring-indigo-500"
                      : ""
                  }`}
                  onClick={() => setSelectedImage(product.image)}
                >
                  <img
                    src={product.image}
                    alt={`${product.name} thumbnail`}
                    className='w-full h-20 object-cover'
                  />
                </div>
                {additionalImages.map((image, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-md overflow-hidden ${
                      selectedImage === image ? "ring-2 ring-indigo-500" : ""
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className='w-full h-20 object-cover'
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className='mb-2'>
              <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800'>
                {product.category}
              </span>
            </div>
            <h1 className='text-3xl font-extrabold text-gray-900 mb-2'>
              {product.name}
            </h1>

            {/* Price and Rating */}
            <div className='flex items-center justify-between mb-4'>
              <p className='text-3xl font-bold text-indigo-600'>
                {product.price}
              </p>
              <div className='flex items-center'>
                <div className='flex items-center'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
                <span className='ml-2 text-sm text-gray-600'>
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Availability */}
            <div className='flex items-center mb-6'>
              <div
                className={`h-3 w-3 rounded-full ${
                  product.stock === "Available"
                    ? "bg-green-500"
                    : "bg-yellow-500"
                } mr-2`}
              ></div>
              <span className='text-sm font-medium text-gray-700'>
                {product.stock}
              </span>
            </div>

            {/* Description */}
            <div className='mb-6'>
              <h2 className='text-lg font-semibold text-gray-900 mb-2'>
                Description
              </h2>
              <p className='text-gray-600'>{product.longDescription}</p>
            </div>

            {/* Features */}
            <div className='mb-8'>
              <h2 className='text-lg font-semibold text-gray-900 mb-2'>
                Features
              </h2>
              {/* <ul className='space-y-2'>
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className='flex items-start'>
                    <Check className='h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5' />
                    <span className='text-gray-600'>{feature}</span>
                  </li>
                ))}
              </ul> */}
            </div>

            {/* Order Form */}
            <div className='border-t border-gray-200 pt-6'>
              <div className='flex items-center mb-4'>
                <label
                  htmlFor='quantity'
                  className='block text-sm font-medium text-gray-700 mr-4'
                >
                  Quantity
                </label>
                <div className='flex items-center'>
                  <button
                    type='button'
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className='p-2 border border-gray-300 rounded-l-md bg-gray-50 text-gray-500 hover:bg-gray-100'
                  >
                    -
                  </button>
                  <input
                    type='number'
                    id='quantity'
                    name='quantity'
                    min='1'
                    value={quantity}
                    onChange={handleQuantityChange}
                    className='p-2 w-16 border-t border-b border-gray-300 text-center focus:ring-indigo-500 focus:border-indigo-500'
                  />
                  <button
                    type='button'
                    onClick={() => setQuantity(quantity + 1)}
                    className='p-2 border border-gray-300 rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-100'
                  >
                    +
                  </button>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
                <button
                  type='button'
                  onClick={handleOrder}
                  className='flex-1 bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center'
                >
                  <ShoppingCart className='h-5 w-5 mr-2' />
                  Order Now
                </button>
                <Link
                  to='/contact'
                  className='flex-1 bg-gray-100 text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors flex items-center justify-center'
                >
                  <Info className='h-5 w-5 mr-2' />
                  Ask a Question
                </Link>
              </div>

              <p className='mt-4 text-sm text-gray-500 flex items-center'>
                <Info className='h-4 w-4 mr-1' />
                For custom requirements or bulk orders, please contact us
                directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
