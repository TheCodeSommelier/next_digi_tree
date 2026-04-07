"use client";

import SectionHeading from "../UI/SectionHeading";
import SectionSubheading from "../UI/SectionSubheading";

const GrowthSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-center gap-20 space-y-3 py-26">
      <SectionHeading
        headingCenter={false}
        className="text-4xl md:text-5xl md:w-1/3 font-semibold text-primary"
      >
        Svoboda růstu
      </SectionHeading>

      <SectionSubheading className="text-primary/70 text-left w-full md:w-2/3 text-lg">
        Naše filozofie je jednoduchá: dobře nastavené procesy, silný management,
        rozvoj lidí i smysluplná digitalizace musí firmě pomáhat růst, ne ji
        brzdit. Nezatěžujeme organizace zbytečnou složitostí – pomáháme
        zpřehlednit fungování, posílit spolupráci a zavádět změny tak, aby měly
        jasný a měřitelný dopad. Věříme v partnerský přístup a navrhujeme
        řešení, která firmám dávají větší stabilitu, flexibilitu a prostor pro
        další rozvoj.
      </SectionSubheading>
    </section>
  );
};

export default GrowthSection;
