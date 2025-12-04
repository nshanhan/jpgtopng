import { Section as SectionType } from "@/types/blocks/section";
import Icon from "@/components/icon";
export default function Feature1({ section }: { section: SectionType }) {
  if (section.disabled) {
    return null;
  }

  return (
    <section id={section.name} className="py-16">
      <div className="w-full md:py-20 py-10 px-4 bg-gradient-to-bl to-[#7c84fc] from-[#ff4dd2]">
        <div className="flex flex-col text-center  m-auto">
          {section.title && (
            <h2 className="mb-6 text-pretty text-3xl lg:text-4xl font-black  text-white  ">
              {section.title}
            </h2>
          )}
          {section.description && (
            <p className="mb-8 text-white max-w-xl text-muted-foreground lg:max-w-none lg:text-lg">
              {section.description}
            </p>
          )}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-[950px] m-auto">
            {section.items?.map((item, i) => (
              <li
                key={i}
                className="flex  gap-3 bg-white rounded-xl text-black p-5"
              >
                <Icon
                  name={item?.icon ?? ""}
                  className="md:text-8xl md:-mt-6 text-7xl -mt-4"
                />
                <div>
                  <p className="mb-3  text-lg text-black  font-black ">
                    {item.title}
                  </p>
                  <p className="text-xs font-medium text-[#242424] ">
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
