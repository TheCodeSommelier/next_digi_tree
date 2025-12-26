import Image from 'next/image';
import { FC, useState } from 'react';

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

const Card: FC<Props> = ({ title, description, imageUrl, imageAlt }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <article
      className="group relative flex h-96 flex-col overflow-hidden rounded-2xl bg-primary shadow-md shadow-black/50"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`w-full overflow-hidden transition-[height] duration-700 ${
          isHover ? 'h-85' : 'h-90'
        }`}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={960}
          height={540}
          className={`h-full w-full object-cover transition-transform duration-700 ${isHover ? 'scale-110' : 'scale-125'}`}
        />
      </div>

      <div className="flex grow flex-col justify-end px-5 pb-5 pt-6 transition-transform duration-700 ease-out group-hover:-translate-y-1">
        <div className="space-y-2">
          <h3
            className={`text-2xl font-semibold text-white transition-transform duration-700 ${
              isHover ? '-translate-y-1' : 'translate-y-0.5'
            }`}
          >
            {title}
          </h3>
          <p
            className={`max-w-xl text-sm text-white overflow-hidden transition-all duration-700 ease-out ${
              isHover ? 'translate-y-0 opacity-100 max-h-32' : 'translate-y-2 opacity-0 max-h-0'
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;
