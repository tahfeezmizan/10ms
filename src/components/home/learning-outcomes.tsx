import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PointersSection } from "@/typss/common";

export default function LearningOutcomes({
  data,
}: {
  data?: PointersSection[];
}) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {data?.[0]?.name || "কোর্সটি করে যা শিখবেন"}
        </h2>

        {/* Learning Outcomes Container */}
        <Card className="border border-gray-200 rounded-lg">
          <CardContent className="p-2 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data?.[0]?.values?.map((course) => (
                <div key={course.id} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <Check className="size-5 text-blue-500" />
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed">
                    {course.text}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
