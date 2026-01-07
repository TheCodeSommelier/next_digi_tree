import Image from 'next/image';
import { Metadata } from 'next';

import Button from '@/app/components/UI/Button';
import SectionHeading from '@/app/components/UI/SectionHeading';
import { products } from '@/app/consts/products/products';
import DropdownCard from '@/app/components/UI/DropdownCard';
import CtaSection from '@/app/components/sections/CtaSection';
import PagePadding from '@/app/components/UI/PagePadding';
import LinkButton from '@/app/components/UI/LinkButton';
import { ROUTES } from '@/app/routes';
import { ProductId } from '@/app/types/Product';

type Params = {
  id: ProductId
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find((item) => item.id === resolvedParams.id);

  if (!product) {
    return {
      title: 'Produkt nenalezen',
    };
  }

  return {
    title: product.title,
    description: product.subtitle,
  };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;

  const product = products.find((item) => item.id === id);

  if (!product) {
    throw new Error('No product to be found');
  }

  const { title, subtitle, imageUrl, packageInfo, results } = product;

  if (!id) return null;

  return (
    <main className="relative min-h-screen text-primary flex w-full flex-col gap-16 py-20">
      <PagePadding>
        {/* Hero */}
        <section
          className="relative overflow-hidden flex flex-col justify-center items-center rounded-2xl h-[700px] w-full text-white shadow-xl shadow-primary/20"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(26,26,65,0.4), rgba(26,26,65,0.85)), url('${imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0" aria-hidden />
          <div className="relative w-full flex flex-col items-center gap-14 px-8 py-16 text-center">
            <h1 className="text-4xl font-semibold leading-tight md:text-7xl">{title}</h1>
            <div className="w-3/7 rounded-lg text-2xl bg-white/10 px-10 py-8 backdrop-blur-lg shadow-lg shadow-black/20">
              <p className="font-medium text-white mb-4">
                {subtitle}
              </p>
              <div className="mt-3 flex justify-center">
                <LinkButton href={ROUTES.product({ productId: id })}>Chci balíček</LinkButton>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="space-y-8 text-center py-32">
          <SectionHeading>Transparentní výsledky</SectionHeading>
          <div className="grid gap-8 md:grid-cols-3">
            {results.map((item) => (
              <div
                key={item.description}
                className="flex flex-col items-center gap-3 p-4"
              >
                <Image src={item.iconUrl} alt={item.iconAlt} width={48} height={48} className="h-12 w-12" />
                <p className="text-primary w-3/4">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </PagePadding>

      {/* Mid hero */}
      <section
        className=" flex items-center justify-end relative overflow-hidden w-full text-white h-[600px]"
        style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(26,26,65,0.40), rgba(26,26,65,0.7)), url('/images/david_presenting_2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
      >
        <PagePadding>
          <div className="max-w-md space-y-3 rounded-2xl bg-white/10 backdrop-blur-lg p-6 shadow-lg shadow-black/20">
            <h2 className="text-3xl font-semibold">Neplánujte AI. Implementujte ji hned.</h2>
            <p className="text-sm text-white/80">
              Vaše týmy tráví až 60 % času rutinou, zatímco konkurence zrychluje s umělou inteligencí. Chybí vám jasná
              strategie a bezpečný rámec, jak AI nasadit, aniž byste ohrozili citlivá data.
            </p>
            <Button primary className="bg-accent text-primary hover:bg-white">
              Chci balíček
            </Button>
          </div>
        </PagePadding>
      </section>

      <PagePadding>
        {/* Package content */}
        <section className="space-y-6 text-center py-16">
          <SectionHeading>Obsah balíčku</SectionHeading>
          <div className="space-y-3">
            {packageInfo.map((info, index) => (
              <DropdownCard key={index} title={info.title}>
                <div className="space-y-2 px-6 py-3 text-left">
                  <p className="text-primary/75">{info.text}</p>
                  <ul className="list-disc space-y-1 pl-5">
                    {info.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </DropdownCard>
            ))}
          </div>
        </section>

        <CtaSection title="Implementujte AI s Digitree!" subtitle='Nyní je čas proměnit strategii ve funkční AI řešení, které garantuje měřitelné zisky. Udělejte první krok k digitální dominanci.'>
          <LinkButton href={ROUTES.product({ productId: id })}>Chci balíček</LinkButton>
        </CtaSection>
      </PagePadding>
    </main>
  );
}
