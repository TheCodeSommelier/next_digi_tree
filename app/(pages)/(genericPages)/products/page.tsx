import SectionHeading from '@/app/components/UI/SectionHeading';
import ProductsSection from '@/app/components/sections/ProductsSection';
import CtaSection from '@/app/components/sections/CtaSection';
import DualRadarChart from '@/app/components/UI/charts/radar/DualRadarChart';
import {
  chartDiffConfig,
  chartDiffData,
  chartWithDigiConfig,
  chartWithDigiData,
  chartWithoutDigiConfig,
  chartWithoutDigiData,
  tableRows
} from './consts';
import RadarChartDefault from '@/app/components/UI/charts/radar/RadarChart';
import Table from '@/app/components/UI/Table';
import { ROUTES } from '@/app/routes';
import LinkButton from '@/app/components/UI/LinkButton';
import PageShell from '@/app/components/UI/PageShell';
import { GradientConfig } from '@/app/types/Gradient';

export const metadata = {
  title: 'Produkty'
};

export default function ProductsPage() {
  const chartsProps = [
    { config: chartWithoutDigiConfig, data: chartWithoutDigiData},
    { config: chartWithDigiConfig, data: chartWithDigiData }
  ];

  const gradients: GradientConfig[] = [{ position: 'hero' }, { position: 'bottom', height: 1500 }];

  return (
    <PageShell gradients={gradients}>
      <ProductsSection />

      <section className="space-y-4 text-center py-32">
        <SectionHeading>
          Nadpis
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          {chartsProps.map(({ config, data }) => (
            <RadarChartDefault
              key={crypto.randomUUID()}
              chartConfig={config}
              chartData={data}
              height={300}
            />
            )
          )}
        </div>
        <div className='w-full h-60 flex justify-center items-center mt-24'>
          <DualRadarChart chartConfig={chartDiffConfig} chartData={chartDiffData} />
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading>
          Hlavní technologické výzvy a jejich řešení
        </SectionHeading>
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-gray-50/50">
          <Table tableRows={tableRows} />
        </div>
      </section>

      <CtaSection title='Nejste si jisti, kde začít?' subtitle='Rádi s vámi projdeme vaše výzvy a najdeme ten nejefektivnější start.'>
        <LinkButton href={ROUTES.contact()}>Konzultace zdarma</LinkButton>
        <LinkButton href={ROUTES.products()} primary={false}>Přehled balíčků</LinkButton>
      </CtaSection>
    </PageShell>
  );
}
