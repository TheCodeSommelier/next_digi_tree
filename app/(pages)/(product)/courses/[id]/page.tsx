import PagePadding from '@/app/components/UI/PagePadding';
import SectionHeading from '@/app/components/UI/SectionHeading';
import Table from '@/app/components/UI/Table';
import ProductHeroSection from '@/app/components/sections/ProductHeroSection';
import ServiceForm from '@/app/components/UI/form/ServiceForm';

import { tableRowsHashLookup } from '../consts';

export type CourseId = 'processes' | 'digitalization' | 'education';

type Params = {
  id: CourseId;
};

type Props = {
  params: Promise<Params>;
};

export default async function CoursePage({ params }: Props) {
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
            headings={['Služba', 'Co řeší', 'Typ výstupu']}
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
