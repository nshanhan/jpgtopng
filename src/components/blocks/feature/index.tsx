import { Section as SectionType } from "@/types/blocks/section";

export default function Feature({ section }: { section: SectionType }) {
  if (section.disabled) {
    return null;
  }

  return (
    <section id={section.name} className="py-16">
      <div className="container">
        <div className="flex flex-col  max-w-7xl  m-auto">
          {section.title && (
            <h2 className="mb-6 text-pretty text-3xl  font-bold lg:text-4xl">
              {section.title}
            </h2>
          )}
          {section.items?.map((item, i) => (
            <div key={i} className="mb-6 pb-6 order-1 border-b">
              <h3 className=" text-xl font-semibold mb-4-">{item.title}</h3>
              <p className="text-[#333333]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
