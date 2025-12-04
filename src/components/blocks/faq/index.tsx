import { Badge } from "@/components/ui/badge";
import { Section as SectionType } from "@/types/blocks/section";

export default function FAQ({ section }: { section: SectionType }) {
  if (section.disabled) {
    return null;
  }

  return (
    <section id={section.name} className="py-16 bg-[#e8e8e8]">
      <div className="container">
        <div className="flex flex-col  max-w-7xl  m-auto">
          {section.title && (
            <h2 className="mb-10 text-pretty  text-3xl lg:text-4xl font-black text-center ">
              {section.title}
            </h2>
          )}
          <div className="flex flex-col gap-2">
            {section.items?.map((item, i) => (
              <div key={i} className=" pb-6 rounded-xl bg-white md:p-10 p-4">
                <h3 className=" text-2xl font-semibold mb-4 text-[#333333] ">{item.title}</h3>
                <p className="text-[#333333]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
