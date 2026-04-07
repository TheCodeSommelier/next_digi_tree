import NavigationButton from "../UI/buttons/NavigationButton";

type Props = {
  imageUrl: string;
  title: string;
  subtitle: string;
  href: string;
  btnText: string;
};

const ProductHeroSection = ({
  imageUrl,
  title,
  subtitle,
  href,
  btnText,
}: Props) => {
  return (
    <section
      className="relative overflow-hidden flex flex-col justify-center items-center rounded-2xl h-[500px] md:h-[700px] w-full text-white shadow-xl shadow-primary/20"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(26,26,65,0.4), rgba(26,26,65,0.85)), url('${imageUrl || "/images/ai_hand.png"}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0" aria-hidden />
      <div className="relative w-full flex flex-col items-center gap-14 px-4 py-8 md:px-8 md:py-16 text-center">
        <h1 className="text-3xl font-semibold leading-tight md:text-7xl">
          {title}
        </h1>
        <div className="w-full md:w-4/7 lg:w-5/7 xl:w-3/7 rounded-lg text-lg md:text-2xl bg-white/10 px-5 md:px-10 py-6 md:py-8 backdrop-blur-lg shadow-lg shadow-black/20">
          <p className="font-medium text-white mb-4">{subtitle}</p>
          <div className="w-full md:w-auto mt-3 flex justify-center">
            <NavigationButton href={href}>{btnText}</NavigationButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHeroSection;
