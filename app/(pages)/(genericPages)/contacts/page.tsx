import { Suspense } from 'react';

import EmailForm from '../../../components/UI/EmailForm';
import ImageWithOverlay from '../../../components/UI/ImageWithOverlay';
import { contacts } from '../../../consts/consts';
import { formatPhoneNum } from '../../../utils/stringUtils';

export const metadata = {
  title: 'Kontakt',
};

const contactSections = [
  {
    id: crypto.randomUUID(),
    label: 'Kontakt',
    items: [formatPhoneNum(contacts.tel), contacts.email]
  },
  {
    id: crypto.randomUUID(),
    label: 'Info',
    items: [contacts.companyName, contacts.address]
  }
];

export default function ContactsPage() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-8 md:gap-16 py-16 md:py-26">
      <Suspense>
        <ImageWithOverlay imageUrl='/images/david_classroom.png' className='h-[500px] md:h-[650px] p-5 md:p-10'>
          <div className="flex flex-col justify-between h-full">
            <div className='space-y-3 flex flex-col gap-3 md:gap-6'>
              <h1 className="text-3xl md:text-4xl font-semibold">Kontaktujte nás!</h1>
              <p className="max-w-md text-sm md:text-lg text-white">
                Máte další otázky? Neváhejte nás kontaktovat! Přejděte do plánování k akcí a získejte přímou
                diagnostiku vašich procesů.
              </p>
            </div>
            <div className="space-y-6">
              {contactSections.map(section => (
                <div key={section.id} className="space-y-2">
                  <p className="text-base md:text-2xl mb-4 font-semibold">{section.label}</p>
                  <div className="space-y-1 text-lg text-white/90">
                    {
                      section.items.map((item, index) => <p key={index}>{item}</p>)
                    }
                  </div>
                </div>

              ))}
            </div>
          </div>
        </ImageWithOverlay>

        <section className="rounded-2xl text-white">
          <EmailForm />
        </section>
      </Suspense>
    </main>
  );
}
