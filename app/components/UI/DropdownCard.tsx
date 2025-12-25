import Image from "next/image"
import { FC, useState } from "react"

type Props = {
  title: string
  text: string
}

const DropdownCard: FC<Props> = ({title, text}) => {
  const [isOpen, setIsOpen] = useState<boolean>()

  const openClasses = isOpen ? "grid-rows-[1fr] opacity-100 px-5 pb-4" : "grid-rows-[0fr] opacity-0";

  const iconPath = isOpen ? "/images/accent_minus.svg" : "/images/primary_plus.svg"
  const iconAlt = isOpen ? "Minus icon in a green color" : "Plus icon in a dark blue color"

  return <article
            key={title}
            className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-md shadow-primary/10 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between cursor-pointer gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="flex items-center gap-3">
                <p className="text-base font-semibold text-primary">
                  {title}
                </p>
              </div>
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full text-primary transition-transform duration-200"
                aria-hidden
              >
                <Image src={iconPath} alt={iconAlt} width={16} height={16} />
              </span>
            </button>

            <div
              className={`grid transform transition-all duration-300 ease-out ${openClasses}`}
            >
              <div className="overflow-hidden">
                <p className="text-sm leading-relaxed text-primary/70">
                  {text}
                </p>
              </div>
            </div>
          </article>
}

export default DropdownCard
