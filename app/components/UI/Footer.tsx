import { contacts } from '@/app/consts';
import { formatPhoneNum } from '@/app/utils/stringUtils';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import PagePadding from './PagePadding';

const navigation = [
  {
    label: 'Navigace',
    items: [
      { name: 'Produkty', href: '/products' },
      { name: 'O nás', href: '/about-us-dawg' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Kontakt', href: '/contact-us' },
    ],
  },
  {
    label: 'Kontakt',
    items: [
      { name: 'digitree label', text: 'DIGITREE EDUCATION' },
      { name: 'info@digitree.cz', href: `mailto:${contacts.email}` },
      { name: formatPhoneNum(contacts.tel), href: `tel:${contacts.tel}` },
    ],
  },
  {
    label: 'Důležité dokumenty',
    items: [
      { name: 'Zásady ochrany osobních údajů', href: '/contacts' },
      { name: 'Terms of Service', href: '/privacy' },
      { name: 'Cookies', href: '/privacy' },
    ],
  },
];

const Footer: FC = () => {
  return (
    <footer className="relative overflow-hidden rounded-tl-3xl rounded-tr-3xl bg-primary text-white">

      <div className="relative flex flex-col gap-10 pt-10 pb-20">
        <PagePadding>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-4 space-y-2">
              <Image src="/images/logo_light.svg" alt="DigiTree company logo" width={150} height={100} />

              <p className="max-w-xl text-sm text-white">
                Digitree je váš partner, který implementuje AI, moderní software
                a neprůstřelnou bezpečnost pro akceleraci měřitelného růstu vaší firmy.
              </p>
            </div>


            {navigation.map((section) => (
              <div key={section.label} className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                  {section.label}
                </p>
                <ul className="space-y-2 text-sm font-light text-gray-40">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      {item.href ?
                        <Link
                          href={item.href}
                          className="transition-colors duration-200 hover:text-accent
                      focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-accent"
                        >
                          {item.name}
                        </Link>
                      :
                        <p>{item.text}</p>
                      }
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </PagePadding>
      </div>

      <div className="w-full border-t-[0.5px] border-accent" />

      <PagePadding>
        <div className='flex justify-between items-center text-gray-20 py-4 text-sm'>
          <p>© {new Date().getFullYear()} DigiTree. Všechna práva vyhrazena.</p>
          <p>Designed by KeySpace</p>
        </div>
      </PagePadding>
    </footer>
  );
};

export default Footer;
