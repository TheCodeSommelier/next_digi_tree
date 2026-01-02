import { useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

import Timeline from './Timeline';

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
    <section ref={ref} className="relative bg-white">
      <div className="py-32">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <Timeline steps={steps} stepFloat={stepFloat} lineScale={lineScale} />
          </div>
        </div>
      </div>
    </section>
  );
}


export default HowItWorksSection;
