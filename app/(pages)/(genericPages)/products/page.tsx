import SectionHeading from "@/app/components/UI/SectionHeading";
import PackageSection from "@/app/components/sections/PackageSection";
import CtaSection from "@/app/components/sections/CtaSection";
import DualRadarChart from "@/app/components/UI/charts/radar/DualRadarChart";
import {
  chartDiffConfig,
  chartDiffData,
  chartWithDigiConfig,
  chartWithDigiData,
  chartWithoutDigiConfig,
  chartWithoutDigiData,
  productsTableRows,
} from "./consts";
import RadarChartDefault from "@/app/components/UI/charts/radar/RadarChart";
import Table from "@/app/components/UI/Table";
import { ROUTES } from "@/app/routes";
import NavigationButton from "@/app/components/UI/buttons/NavigationButton";
import CoursesSection from "@/app/components/sections/CoursesSection";

export const metadata = {
  title: "Produkty",
};

export default function ProductsPage() {
  const chartsProps = [
    { config: chartWithoutDigiConfig, data: chartWithoutDigiData },
    { config: chartWithDigiConfig, data: chartWithDigiData },
  ];

  return (
    <main className="text-primary">
      <CoursesSection />
      <PackageSection />

      <section className="space-y-4 text-center py-26">
        <SectionHeading>Váš růst</SectionHeading>

        <div className="flex flex-col gap-0 md:gap-12">
          <div className="flex flex-col xl:flex-row gap-6">
            {chartsProps.map(({ config, data }, index) => (
              <div
                key={crypto.randomUUID()}
                className="w-full flex-col items-center justify-center"
              >
                <p className="text-2xl font-semibold">
                  {index === 1 ? "s Digitree" : "bez Digitree"}
                </p>
                <RadarChartDefault chartConfig={config} chartData={data} />
              </div>
            ))}
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

        <Table
          tableRows={productsTableRows}
          headings={["Detailní služba", "bez Digitree", "s Digitree"]}
        />
      </section>

      <CtaSection
        title="Nejste si jisti, kde začít?"
        subtitle="Rádi s vámi projdeme vaše výzvy a najdeme ten nejefektivnější start."
      >
        <NavigationButton href={ROUTES.contact()}>
          Konzultace zdarma
        </NavigationButton>
      </CtaSection>
    </main>
  );
}
