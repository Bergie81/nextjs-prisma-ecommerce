import Image from 'next/image';
import Link from 'next/link';
import pluralize from 'pluralize';
import { formatAsCurrency } from './../lib/util';
import { ProductWithReviewCount } from './../pages';
interface ProductCardProps {
  product: ProductWithReviewCount;
  usePurchaseButton?: boolean;
}
const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  return (
    <div>
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full">
        <Image className="object-cover  rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={product.image} width={250} height={300} />
        <div className="flex flex-col justify-between leading-normal p-6">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
          <p className="font-bold text-2xl mb-4">
            {formatAsCurrency(props.product.price)}
          </p>
          {props.product._count && (
            <div className="mb-2">
              <p>
                {props.product._count.reviews} Review
                {pluralize('s', props.product._count.reviews)}
              </p>
            </div>
          )}
          {props.usePurchaseButton ? (
            <Link href={`/products/${product.id}`}>
              <a className="bg-pink-700 text-white rounded-full py-2 px-4 text-sm hover:bg-pink-800 shadow-md w-24">
                Buy Now
              </a>
            </Link>
          ) : (
            <Link href={`/products/${product.id}`}>
              <a className="bg-pink-700 text-white rounded-full py-2 px-4 text-sm hover:bg-pink-800 shadow-md w-28">
                View Details
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
