import Image from "next/image";
import { FC, ReactNode, useMemo } from "react";

type Props = {
  title: string;
  description: string;
  icon?: ReactNode;
  imageUrl?: string;
};

const Card: FC<Props> = ({
  title,
  description,
  icon,
  imageUrl,
}) => {
  const backgroundStyle = useMemo(
    () => ({
      backgroundImage: imageUrl
        ? `linear-gradient(120deg, rgba(17,25,40,0.35) 0%, rgba(17,25,40,0.65) 100%), url(${imageUrl})`
        : "radial-gradient(circle at 20% 20%, rgba(118,206,0,0.25), transparent 40%), radial-gradient(circle at 80% 0%, rgba(26,26,65,0.4), transparent 45%), linear-gradient(120deg, #0f172a, #1a1a41)",
    }),
    [imageUrl]
  );

  return (
    <article className="group relative h-72 overflow-hidden rounded-3xl border
    border-primary/10 bg-primary/5 shadow-lg shadow-primary/10
    transition-transform duration-300 cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform
        duration-500 group-hover:scale-105"
        style={backgroundStyle}
        aria-hidden
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/10
      via-black/25 to-black/45 transition-colors duration-300
      group-hover:from-primary/70 group-hover:via-primary/80
      group-hover:to-primary/80" />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

        <span className="rounded-full px-4 py-2 text-sm font-semibold
        tracking-[0.18em] text-white opacity-0 transition-all duration-500
        ease-out group-hover:opacity-100 group-hover:scale-100 scale-95
        flex justify-between items-center gap-3">

          <Image src="/images/plus_white.svg" alt="White plus icon" width={24} height={24} />
          Otevřít
        </span>
      </div>

      <div className="relative flex h-full flex-col justify-between p-6">
        <div className="flex items-center gap-3">
          {icon && (
            <span className="flex h-10 w-10 items-center justify-center
            rounded-2xl bg-white/80 text-primary shadow-md shadow-primary/10">
              {icon}
            </span>
          )}
        </div>

        <div className="min-h-24 flex flex-col justify-end gap-2">
          <h3 className="text-2xl font-semibold text-white drop-shadow-sm translate-y-1 transition-all duration-500 ease-out group-hover:-translate-y-1">
            {title}
          </h3>
          <p className="max-w-xl text-sm leading-relaxed text-white/80 opacity-0 translate-y-3 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;
