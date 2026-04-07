import { products } from "../../consts/packages/products";
import ProudctCard from "../UI/cards/ProductCard";
import SectionHeading from "../UI/SectionHeading";

const PackageSection = () => {
  return (
    <section className="space-y-6 py-26">
      <SectionHeading>Naše balíčky pro růst vašeho podniku</SectionHeading>
      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <ProudctCard
            key={product.id}
            productId={product.id}
            title={product.title}
            imageUrl={product.heroImageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default PackageSection;
