import { Section as SectionType } from "@/types/blocks/section";
export default function Feature3({ section }: { section: SectionType }) {
  if (section.disabled) {
    return null;
  }

  return (
    <section id={section.name} className="py-32">
      <div className="container">
        <div className="flex flex-col  max-w-4xl  m-auto text-center">
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
          <ul className=" m-auto flex flex-col gap-10 text-left">
            {section.items?.map((item, i) => (
              <li key={i} className="">
                <p className="mb-3  text-[#444]  text-2xl font-black">
                  {item.title}
                </p>
                <p className="font-medium text-[#444] ">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
