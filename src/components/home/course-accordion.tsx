import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionData = [
  {
    id: "item-1",
    title: "IELTS Course-টি যাদের জন্য",
    content: [
      "যারা উচ্চশিক্ষা, মাইগ্রেশন বা চাকরির জন্য বিদেশে যেতে চান।",
      "যারা উচ্চশিক্ষা শেষে বা দেশে বসবাসরত অবস্থায় বিদেশে স্থায়ীভাবে বসবাসের জন্য আবেদন করতে চান।",
      "IELTS পরীক্ষা যাদের জন্য ভীতিকর, কিংবা যারা IELTS প্রস্তুতি কোথায় থেকে শুরু করবেন তা জানেন না।",
      "যারা আগে পরীক্ষা নিয়েছেন কিন্তু নিজের IELTS Band Score বাড়াতে চান।",
      "যারা চাকরি বা ব্যবসার কাজে কিংবা ব্যক্তিগত আগ্রহে নিজেদের reading, writing, listening এবং speaking দক্ষতা বাড়াতে চান।",
      "স্টুডেন্ট কিংবা চাকরিজীবীদের মধ্যে যারা ব্যস্ততার কারণে ঘরে বসেই IELTS এর জন্য সেরা প্রস্তুতি নিতে চান।",
    ],
  },
  {
    id: "item-2",
    title: "IELTS Course-টি কেন সম্পূর্ণ",
    content: [
      "সম্পূর্ণ IELTS সিলেবাস কভার করা হয়েছে।",
      "প্রতিটি সেকশনের জন্য বিস্তারিত কৌশল এবং টিপস।",
      "রিয়েল এক্সাম প্যাটার্ন অনুসরণ করে তৈরি।",
      "অভিজ্ঞ ইন্সট্রাক্টরদের দ্বারা প্রস্তুতকৃত।",
    ],
  },
  {
    id: "item-3",
    title: "এই IELTS Course-টি আপনাকে যেভাবে সাহায্য করবে",
    content: [
      "আপনার IELTS Band Score উন্নতি করবে।",
      "সময় ব্যবস্থাপনার কৌশল শেখাবে।",
      "আত্মবিশ্বাস বৃদ্ধি করবে।",
      "পরীক্ষার ভয় দূর করবে।",
      "ব্যবহারিক অভিজ্ঞতা প্রদান করবে।",
    ],
  },
];

export default function CourseAccordion({ data }: { data?: any }) {
  console.log("Accrodion", data);
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
          className="w-full"
        >
          {accordionData.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border border-gray-200 rounded-lg mb-4 px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-4">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <ul className="space-y-3">
                  {item.content.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {point}
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
