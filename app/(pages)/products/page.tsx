'use client';

import SectionHeading from '@/app/components/UI/SectionHeading';
import Button from '@/app/components/UI/Button';
import ProductsSection from '@/app/components/ProductsSection';
import CtaSection from '@/app/components/CtaSection';
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

export default function Products() {

  return (
    <main className="min-h-screen">
      <ProductsSection />

      <section className="space-y-4 text-center py-32">
        <SectionHeading>
          Nadpis
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Without digitree */}
          <RadarChartDefault chartConfig={chartWithoutDigiConfig} chartData={chartWithoutDigiData} />

          {/* Without digitree */}
          <RadarChartDefault chartConfig={chartWithDigiConfig} chartData={chartWithDigiData} />

        </div>
        <div className='w-full h-60 flex justify-center items-center'>
          {/* Without digitree */}
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
        <Button primary>
          Konzultace zdarma
        </Button>
        <Button primary={false}>Přehled balíčků</Button>
      </CtaSection>
    </main>
  );
}
