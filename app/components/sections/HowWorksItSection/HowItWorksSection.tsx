'use client';

import { useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

import Timeline from './Timeline';
import CtaSection from '../CtaSection';

const steps = [
    {
      id: 'audit-kpi',
      title: 'Strategický audit a definice KPI',
      body:
        'Důkladně analyzujeme stávající stav, odhalíme kritické slabiny a nadefinujeme konkrétní měřitelné cíle (ROI).',
    },
    {
      id: 'roadmap',
      title: 'Akční plán a custom roadmapa',
      body:
        'Sestavíme precizní, hands-on implementační plán s jasnými milníky a prioritami, přesně na míru vašim potřebám.',
    },
    {
      id: 'pilot-projects',
      title: 'Rychlá implementace pilotních projektů',
      body:
        'Spustíme rychlé, cílené pilotní projekty (PoC), abychom okamžitě demonstrovali funkčnost a hodnotu řešení.',
    },
    {
      id: 'knowledge-transfer',
      title: 'Intenzivní přenos Know-How',
      body:
        'Váš tým nejen proškolíme, ale aktivně jej zapojíme. Předáme veškerou dokumentaci a znalosti pro vaši plnou soběstačnost.',
    },
    {
      id: 'continuous-optimization',
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
    <section ref={ref} className="relative py-26">
      <CtaSection
        title='Jak to funguje?'
        subtitle='Měříme jen výsledky. Náš pětikrokový proces garantuje, že se vaše strategie rychle a prokazatelně promění v zisky.'
      />
      <div className="mx-auto w-full max-w-6xl">
        <Timeline steps={steps} stepFloat={stepFloat} lineScale={lineScale} />
      </div>
    </section>
  );
}


export default HowItWorksSection;
