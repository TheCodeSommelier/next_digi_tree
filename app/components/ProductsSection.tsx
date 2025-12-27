import ProudctCard from './UI/cards/ProductCard';
import SectionHeading from './UI/SectionHeading';

const ProductsSection = () => {
  return <section className="space-y-6">
    <SectionHeading>
      Naše balíčky pro růst Vašeho podniku
    </SectionHeading>
    <div className="grid gap-6 md:grid-cols-3">
      <ProudctCard
        title="Okamžitá měřitelná efektivita"
        description="Automatizace rutinních úkolů, rychlé dashboardy a jasná data pro rozhodnutí."
        imageUrl="/images/ai_hand.png"
      />
      <ProudctCard
        title="Kybernetická bezpečnost"
        description="Bezpečnostní standardy, které chrání vaše zákazníky i reputaci značky."
        imageUrl="/images/hacking.png"
      />
      <ProudctCard
        title="Udržitelný tech stack"
        description="Škálovatelná architektura bez vendor lock-inu, která roste s vaším byznysem."
        imageUrl="/images/planner.png"
      />
    </div>
  </section>;
};

export default ProductsSection;
