import { Card, CardContent } from "@/components/ui/card";
import { FeatureExplanationsSection } from "@/typss/common";
import { Check } from "lucide-react";
import Image from "next/image";

export default function ExclusiveFeatures({
  data,
}: {
  data?: FeatureExplanationsSection[];
}) {
  console.log(data);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {data?.[0]?.name || "কোর্স এক্সক্লুসিভ ফিচার"}
      </h2>

      <Card className="border border-gray-200 ">
        <CardContent className="p-2 px-6">
          <div className="space-y-8">
            {data?.[0]?.values.map((feature) => (
              <div
                key={feature.id}
                className="grid md:grid-cols-3 gap-6 items-start"
              >
                {/* Left Content */}
                <div className="space-y-4 col-span-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>

                  <div className="space-y-3">
                    {feature.checklist.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className=" flex justify-center md:justify-end">
                  <Image
                    src={feature.file_url || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full max-w-sm h-auto object-cover rounded-lg"
                    width={300}
                    height={200}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
