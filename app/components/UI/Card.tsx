import { FC, ReactNode } from "react";
import Button from "./Button";

type Props = {
  title: string;
  description: string;
  badge?: string;
  tone?: "bright" | "night";
  actionLabel?: string;
  icon?: ReactNode;
};

const toneStyles: Record<NonNullable<Props["tone"]>, string> = {
  bright: "from-accent/15 via-white to-primary/10",
  night: "from-primary/70 via-primary/80 to-primary/70",
};

const Card: FC<Props> = ({
  title,
  description,
  badge,
  tone = "bright",
  actionLabel = "Zjistit více",
  icon,
}) => {
  const gradient = toneStyles[tone];
  const isNight = tone === "night";

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-lg shadow-primary/10 transition-transform duration-300 hover:-translate-y-1">
      <div
        className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-70`}
        aria-hidden
      />
      <div className="relative flex h-full flex-col gap-4 p-6">
        <div className="flex items-center justify-between gap-3">
          {badge ? (
            <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary/70 shadow-sm shadow-primary/10">
              {badge}
            </span>
          ) : (
            <span className="inline-block h-2 w-12 rounded-full bg-primary/15" />
          )}
          {icon && (
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 text-primary shadow-md shadow-primary/10">
              {icon}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <h3
            className={`text-xl font-semibold ${
              isNight ? "text-white" : "text-primary"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm leading-relaxed ${
              isNight ? "text-white/70" : "text-primary/70"
            }`}
          >
            {description}
          </p>
        </div>

        <div className="mt-auto">
          <Button primary={!isNight} className={isNight ? "bg-white text-primary hover:bg-accent" : ""}>
            {actionLabel}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Card;
