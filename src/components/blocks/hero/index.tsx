import { Hero as HeroType } from "@/types/blocks/hero";
import LocaleToggle from "@/components/locale/toggle";
import JpgToPng from "./jpg-to-png";
import { Link } from "@/i18n/navigation";

export default function Hero({ hero }: { hero: HeroType }) {
  if (hero.disabled) {
    return null;
  }

  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-6 mb-8 relative  max-w-7xl  m-auto">
          {hero.logo && (
            <h1 className="text-4xl text-[#242424] max-w-4xl font-black">
              {hero.logo.label}
            </h1>
          )}

          {hero.show_locale && (
            <div className="md:absolute  top-2.5 right-2.5 z-10 ">
              <LocaleToggle />
            </div>
          )}
          {hero.title && (
            <p className="text-base text-[#242424] max-w-4xl">{hero.title}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <video
            className="w-full max-w-xl rounded-3xl "
            src="/imgs/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          ></video>
          {hero.upLoadButton && <JpgToPng upLoadButton={hero.upLoadButton} />}
        </div>
      </div>
    </section>
  );
}
