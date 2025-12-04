import { Section as SectionType } from "@/types/blocks/section";
import { cn } from "@/lib/utils";
export default function Feature2({ section }: { section: SectionType }) {
  if (section.disabled) {
    return null;
  }

  return (
    <section id={section.name} className="py-32">
      <div className="container">
        <div className="flex flex-col  max-w-7xl  m-auto text-center">
          {section.title && (
            <h2 className="mb-6 text-pretty  text-3xl lg:text-4xl font-black ">
              {section.title}
            </h2>
          )}
          {section.description && (
            <p className="mb-8 max-w-xl text-muted-foreground lg:max-w-none lg:text-lg">
              {section.description}
            </p>
          )}
          <ul className="max-w-[1000px] m-auto flex flex-col gap-20">
            {section.items?.map((item, i) => (
              <li
                key={i}
                className={cn(
                  "grid grid-cols-1 md:grid-cols-2 items-center gap-8",
                  i === 1 && "md:[&>img]:order-last"
                )}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className={cn(
                    "w-80 h-auto row-span-2",
                    i === 1 && "md:justify-self-end"
                  )}
                />
                <div className="text-left">
                  <p className="mb-3  text-accent-foreground text-4xl md:text-4xl font-black">
                    {item.title}
                  </p>
                  <p className="font-medium text-[#242424] ">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
