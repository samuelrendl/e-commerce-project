import ProductImages from "@/components/product/ProductImages";
import AddToCartButton from "@/components/shared/AddToCartButton";
import { getProductById } from "@/lib/actions/product.action";
import { getStockLevel } from "@/lib/utils";
import parse from "html-react-parser";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const Page = async ({ params }: ProductPageProps) => {
  const result = await getProductById({ productId: params.id });

  return (
    <section className="container px-4">
      <div className="flex flex-col md:flex-row gap-3 md:gap-7">
        <div className="flex justify-center items-center mb-5 bg-white rounded-xl flex-1">
          <ProductImages images={result.imageUrls} alt={result.name} />
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="font-bold">{result.name}</h3>
          <p className="text-2xl">${result.price}</p>
          <p
            className={`${result.stock === 0 ? "text-red-600" : ""} text-gray-600 dark:text-neutral-300`}
          >
            {getStockLevel(result.stock)}
          </p>
          <AddToCartButton stock={result.stock} extraStyling="md:max-w-52" />
        </div>
      </div>
      <div>
        <h4 className="text-2xl">Description</h4>
        <div className="flex flex-col gap-5">{parse(result.description)}</div>
      </div>
    </section>
  );
};

export default Page;
