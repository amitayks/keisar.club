import { formatCurrency } from "../../utils/helpers";
import { Product } from "./useProduct";

function ProductTable({ product }: { product: Product }) {
  const productDetails = [
    { label: "עץ", value: product?.wood },
    { label: "משקל", value: product.weight },
    { label: "גובה", value: product.height },
    { label: "אורך", value: product.length },
    { label: "רוחב", value: product.width },
    {
      label: "משלוח",
      value: product.shipmentPrice
        ? formatCurrency(product.shipmentPrice)
        : formatCurrency(0),
    },
  ];

  return (
    <div className='space-y-2 text-stone-600 dark:text-stone-400'>
      {productDetails.map((detail, index) => (
        <div key={index} className='flex justify-between py-2'>
          <span className='font-medium'>{detail.label}</span>
          <span>{detail.value}</span>
        </div>
      ))}
    </div>
  );
}

export default ProductTable;
