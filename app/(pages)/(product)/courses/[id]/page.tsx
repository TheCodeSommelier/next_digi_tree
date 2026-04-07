import EmailForm from "@/app/components/UI/EmailForm";
import PagePadding from "@/app/components/UI/PagePadding";
import SectionHeading from "@/app/components/UI/SectionHeading";
import Table from "@/app/components/UI/Table";
import { tableRowsHashLookup } from "../consts";

export type CourseId = "processes" | "digitalization" | "education";

type Params = {
  id: CourseId;
};

export default async function CoursePage({
  params,
}: Promise<{ params: Params }>) {
  const { id } = await params;

  const courseData = tableRowsHashLookup[id as CourseId];

  return (
    <PagePadding>
      <main className="py-26">
        <SectionHeading>{courseData.heading}</SectionHeading>
        <div className="mb-32">
          <Table
            tableRows={courseData.rows}
            headings={["Služba", "Co řeší", "Typ výstupu"]}
          />
        </div>

        <SectionHeading>Poptejte službu, kterou potřebujete</SectionHeading>
        <EmailForm />
      </main>
    </PagePadding>
  );
}
