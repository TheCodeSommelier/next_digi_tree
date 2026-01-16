
import { products } from '../../consts/products/products';
import ProudctCard from '../UI/cards/ProductCard';
import SectionHeading from '../UI/SectionHeading';


const ProductsSection = () => {
  return <section className="space-y-6 py-26">
    <SectionHeading>
      Naše balíčky pro růst vašeho podniku
    </SectionHeading>
    <div className="grid gap-6 md:grid-cols-3">
      {products.map(product =>
        <ProudctCard
          key={product.id}
          productId={product.id}
          title={product.title}
          description={product.description}
          imageUrl={product.heroImageUrl}
        />
      )}
    </div>
  </section>;
};

export default ProductsSection;
