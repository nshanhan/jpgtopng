import { Section as SectionType } from "@/types/blocks/section";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function Showcase({ section }: { section: SectionType }) {
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
          <div className=" rounded-2xl overflow-hidden">
            <Table>
              <TableHeader className="bg-black ">
                <TableRow>
                  <TableHead className=" text-white p-4 box-border">
                    {section.Application}
                  </TableHead>
                  <TableHead className="text-white p-4 box-border">
                    {section.ApplicationSub}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {section.items?.map((item, i) => (
                  <TableRow key={i} className="mb-6 pb-6 order-1 border-b">
                    <TableCell className="py-4 pl-4 box-border">
                      {item.title}
                    </TableCell>
                    <TableCell className="py-4 pl-4 box-border">
                      {item.description}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}
