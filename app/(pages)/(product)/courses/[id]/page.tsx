import PagePadding from "@/app/components/UI/PagePadding";
import SectionHeading from "@/app/components/UI/SectionHeading";
import Table from "@/app/components/UI/Table";
import { tableRowsHashLookup } from "../consts";
import ProductHeroSection from "@/app/components/sections/ProductHeroSection";
import ServiceForm from "@/app/components/UI/form/ServiceForm";

export type CourseId = "processes" | "digitalization" | "education";

type Params = Promise<{
  params: {
    id: CourseId;
  };
}>;

export default async function CoursePage({ params }: Params) {
  const { id } = await params;

  const courseData = tableRowsHashLookup[id as CourseId];

  const options = courseData.rows.map((row) => row.service);

  return (
    <PagePadding>
      <main className="flex flex-col gap-32 py-26">
        <div>
          <ProductHeroSection
            title={courseData.title}
            subtitle={courseData.subtitle}
            imageUrl={courseData.imageUrl}
            href={`#${id}`}
            btnText="Chci službu"
          />
        </div>

        <div>
          <Table
            tableRows={courseData.rows}
            headings={["Služba", "Co řeší", "Typ výstupu"]}
          />
        </div>

        <div>
          <SectionHeading id={id}>
            Poptejte službu, kterou potřebujete
          </SectionHeading>
          <ServiceForm options={options} courseTitle={courseData.title} />
        </div>
      </main>
    </PagePadding>
  );
}
