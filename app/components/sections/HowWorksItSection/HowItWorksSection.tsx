import { useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

import Timeline from './Timeline';
import CtaSection from '../CtaSection';

const steps = [
    {
      id: crypto.randomUUID(),
      title: 'Strategický audit a definice KPI',
      body:
        'Důkladně analyzujeme stávající stav, odhalíme kritické slabiny a nadefinujeme konkrétní měřitelné cíle (ROI).',
    },
    {
      id: crypto.randomUUID(),
      title: 'Akční plán a custom roadmapa',
      body:
        'Sestavíme precizní, hands-on implementační plán s jasnými milníky a prioritami, přesně na míru vašim potřebám.',
    },
    {
      id: crypto.randomUUID(),
      title: 'Rychlá implementace pilotních projektů',
      body:
        'Spustíme rychlé, cílené pilotní projekty (PoC), abychom okamžitě demonstrovali funkčnost a hodnotu řešení.',
    },
    {
      id: crypto.randomUUID(),
      title: 'Intenzivní přenos Know-How',
      body:
        'Váš tým nejen proškolíme, ale aktivně jej zapojíme. Předáme veškerou dokumentaci a znalosti pro vaši plnou soběstačnost.',
    },
    {
      id: crypto.randomUUID(),
      title: 'Kontinuální optimalizace a růst',
      body:
        'Po implementaci nekončíme. Dále sledujeme KPI a aktivně optimalizujeme systém pro neustálé zlepšování a maximální výkon.',
    },
  ];

export function HowItWorksSection() {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const stepFloat = useTransform(scrollYProgress, [0, 1], [0, steps.length - 1]);

  const lineScale = reduceMotion ? 1 : scrollYProgress;

  return (
    <section ref={ref} className="relative bg-white py-32">
      <CtaSection
        title='Jak to funguje?'
        subtitle='Měříme jen výsledky. Náš pětikrokový proces garantuje, že se vaše strategie rychle a prokazatelně promění v zisky.'
        className="pb-0 mb-14"
      />
      <div className="mx-auto w-full max-w-6xl">
        <Timeline steps={steps} stepFloat={stepFloat} lineScale={lineScale} />
      </div>
    </section>
  );
}


export default HowItWorksSection;
