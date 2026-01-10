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

export const metadata = {
  title: 'Produkty',
};

export default function ProductsPage() {
  const chartsProps = [
    { config: chartWithoutDigiConfig, data: chartWithoutDigiData},
    { config: chartWithDigiConfig, data: chartWithDigiData }
  ];

  return (
    <main className='text-primary'>
      <ProductsSection />

      <section className="space-y-4 text-center py-26">
        <SectionHeading>
          Nadpis
        </SectionHeading>

        <div className="flex flex-col gap-0 md:gap-12">
          <div className="flex flex-col md:flex-row gap-6">
            {chartsProps.map(({ config, data }, index) => (
              <div key={crypto.randomUUID()} className='w-full flex-col items-center justify-center'>
                <p className='text-2xl font-semibold'>{index === 1 ? 's Digitree' : 'bez Digitree'}</p>
                <RadarChartDefault
                  chartConfig={config}
                  chartData={data}
                />
              </div>
            )
          )}
          </div>
          <DualRadarChart
            chartConfig={chartDiffConfig}
            chartData={chartDiffData}
          />
        </div>
      </section>

      <section className="space-y-6 py-26">
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
    </main>
  );
}
