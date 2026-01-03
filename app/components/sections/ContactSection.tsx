import { contacts } from '@/app/consts/consts';
import Link from 'next/link';

const ContactSection = () => {
  return <section className="space-y-3 py-4">
    <h2 className="text-xl font-semibold text-primary">8. Kontaktujte nás</h2>
    <p className="text-primary/80 leading-relaxed">
      Pokud máte jakékoli dotazy nebo obavy týkající se našich zásad používání cookies a ochrany osobních údajů,
      neváhejte nás kontaktovat.
    </p>
    <p className="text-primary/80">
      E-mail:{' '}
      <Link href={`mailto:${contacts.email}`} className="pb-px hover:text-accent duration-200 border-b">
        {contacts.email}
      </Link>
    </p>
    <p className="text-primary/80">
      Telefon:{' '}
      <Link href={`tel:${contacts.tel}`} className="pb-px hover:text-accent duration-200 border-b">
        {contacts.tel}
      </Link>
    </p>
  </section>;
};

export default ContactSection;
