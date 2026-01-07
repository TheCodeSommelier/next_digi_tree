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
    <main className="flex items-center justify-between gap-16 py-32">
      <ImageWithOverlay imageUrl='/images/david_classroom.png' className='w-1/2 h-[650px] p-10'>
        <div className="flex flex-col justify-between h-full">
          <div className='space-y-3 flex flex-col gap-6'>
            <h1 className="text-4xl font-semibold">Kontaktujte nás!</h1>
            <p className="max-w-md text-lg text-white">
              Máte další otázky? Neváhejte nás kontaktovat! Přejděte do plánování k akcí a získejte přímou
              diagnostiku vašich procesů.
            </p>
          </div>
          <div className="space-y-6">
            {contactSections.map(section => (
              <div key={section.id} className="space-y-2">
                <p className="text-2xl mb-4 font-semibold">{section.label}</p>
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

      <section className="rounded-2xl w-1/2 px-6 py-8 text-white">
        <EmailForm />
      </section>
    </main>
  );
}
