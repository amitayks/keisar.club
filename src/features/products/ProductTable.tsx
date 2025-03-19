import { formatCurrency } from "../../utils/helpers";
import { Product } from "./useProduct";
function ProductTable({ product }: { product: Product }) {
  return (
    <table className='table-auto w-full text-center text-stone-600 dark:text-stone-400 '>
      <tbody>
        <tr>
          <td className='border px-auto py-2'>{product?.wood}</td>
          <td className='border px-auto py-2'>Wood</td>
        </tr>
        <tr>
          <td className='border px-auto py-2'>{product.weight}</td>
          <td className='border px-auto py-2'>Weight</td>
        </tr>
        <tr>
          <td className='border px-auto py-2'>{product.height}</td>
          <td className='border px-auto py-2'>Height</td>
        </tr>
        <tr>
          <td className='border px-auto py-2'>{product.length}</td>
          <td className='border px-auto py-2'>Length</td>
        </tr>
        <tr>
          <td className='border px-auto py-2'>{product.width}</td>
          <td className='border px-auto py-2'>Width</td>
        </tr>
        <tr>
          <td className='border px-auto py-2'>
            {product.shipmentPrice
              ? formatCurrency(product.shipmentPrice)
              : formatCurrency(0)}
          </td>
          <td className='border px-auto py-2'>Shipment Price</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProductTable;
