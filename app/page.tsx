import Button from './components/UI/Button';
import Card from './components/UI/Card';
import EmailForm from './components/UI/EmailForm';
import Navbar from './components/UI/Navbar';
import TextArea from './components/UI/TextArea';
import TextInput from './components/UI/TextInput';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-primary/5 via-white to-accent/10 text-primary px-page-padding">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-12">
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">
            UI kit
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-primary sm:text-5xl">
            DigiTree UI kit
          </h1>
          <p className="max-w-3xl text-primary/70">
            Navržené komponenty, které drží jednotnou vizuální linku značky.
            Každý blok drží silný kontrast, mikro stíny a jemné gradienty, aby
            působily prémiově a zároveň zůstaly čitelné.
          </p>
        </header>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/60">
                Navigace
              </p>
              <h2 className="text-2xl font-semibold text-primary">
                Pevná top bar navigace
              </h2>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold
            text-primary shadow-sm shadow-primary/10"
            >
              Navbar
            </span>
          </div>
          <div className="rounded-[26px] border border-primary/10 bg-white/80 p-5
          shadow-xl shadow-primary/10 backdrop-blur"
          >
            <Navbar />
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/60">
                Buttons
              </p>
              <h2 className="text-2xl font-semibold text-primary">
                Kontrastní akční prvky
              </h2>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold
            text-primary shadow-sm shadow-primary/10"
            >
              Buttons
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-primary/10 bg-white p-4 shadow-md shadow-primary/10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary/60">
                Primary
              </p>
              <Button primary className="w-full justify-center">
                Přehled balíčků
              </Button>
            </div>
            <div className="rounded-2xl border border-primary/10 bg-white p-4 shadow-md shadow-primary/10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary/60">
                Secondary
              </p>
              <Button primary={false} className="w-full justify-center">
                Kontaktujte nás
              </Button>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/60">
                Inputs
              </p>
              <h2 className="text-2xl font-semibold text-primary">
                Pole pro sběr dat
              </h2>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold
            text-primary shadow-sm shadow-primary/10"
            >
              Text input / Text area
            </span>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-primary/10 bg-white p-5 shadow-md shadow-primary/10">
              <TextInput
                label="Email"
                placeholder="vaše@email.cz"
                helperText="Validace e-mailu řeší backend / form lib."
              />
            </div>
            <div className="rounded-2xl border border-primary/10 bg-white p-5 shadow-md shadow-primary/10">
              <TextArea
                label="Zpráva"
                placeholder="Napište pár vět..."
                helperText="Text area pro delší vstupy. Výška je responzivní."
              />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/60">
                Cards
              </p>
              <h2 className="text-2xl font-semibold text-primary">
                Moduly pro zvýraznění obsahu
              </h2>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold
            text-primary shadow-sm shadow-primary/10"
            >
              Cards
            </span>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card
              title="Firemní růst"
              description="Kompletní balíček pro firmy, které chtějí rychle spustit
              e‑commerce projekty, držet kvalitu kódu a mít jasný reporting."
              imageUrl="/window.svg"
            />
            <Card
              title="Onboarding s expertem"
              description="Osobní konzultace, prioritní support a přístup k našim
              produktovým šablonám, které urychlí integraci."
              imageUrl="/globe.svg"
            />
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/60">
                Formulář
              </p>
              <h2 className="text-2xl font-semibold text-primary">
                Email pro lead generation
              </h2>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold
            text-primary shadow-sm shadow-primary/10"
            >
              Email form
            </span>
          </div>
          <EmailForm />
        </section>
      </main>
    </div>
  );
}
