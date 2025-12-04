import Icon from "@/components/icon";
import { Section as SectionType } from "@/types/blocks/section";

export default function Feature4({ section }: { section: SectionType }) {
  if (section.disabled) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col  max-w-7xl  m-auto">
          {section.title && (
            <h2 className="mb-6 text-pretty text-3xl  font-bold lg:text-4xl">
              {section.title}
            </h2>
          )}
          {section.description && (
            <p className="mb-8 max-w-xl text-muted-foreground lg:max-w-none lg:text-lg">
              {section.description}
            </p>
          )}
          <ul className=" text-left gap-6">
            {section.items?.map((item, i) => (
              <li key={i} className="flex items-center gap-4 mb-4  ">
                {item.icon && <Icon name={item.icon} className="size-6 " />}
                <div className="text-xl md:text-base">
                  <strong> {item.title}</strong> - {item.description}
                </div>
              </li>
            ))}
          </ul>
          {section.subTitle && (
            <p className="mb-8 max-w-xl text-muted-foreground lg:max-w-none lg:text-lg">
              {section.subTitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
