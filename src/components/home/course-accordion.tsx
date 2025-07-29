import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AboutSection } from "@/typss/common";

export default function CourseAccordion({ data }: { data?: AboutSection[] }) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {data?.[0]?.name || " কোর্স সম্পর্কে বিস্তারিত"}
        </h2>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full border rounded-md"
        >
          {data?.[0]?.values?.map((item) => (
            <AccordionItem key={item.id} value={item.id} className=" mb-4 px-6">
              <AccordionTrigger className="font-medium md:text-base ">
                <span
                  style={{ whiteSpace: "pre-wrap" }}
                  dangerouslySetInnerHTML={{
                    __html: item?.title,
                  }}
                ></span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <ul className="space-y-3">
                  {data?.[0]?.values?.map((accordionItem, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="tenms__paragraph text-gray-700  leading-relaxed">
                        <span
                          style={{ whiteSpace: "pre-wrap" }}
                          dangerouslySetInnerHTML={{
                            __html: accordionItem?.description,
                          }}
                        ></span>
                      </p>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
