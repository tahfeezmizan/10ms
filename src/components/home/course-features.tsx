import { FeaturesSection } from "@/typss/common";
import Image from "next/image";

export default function CourseFeatures({
  data,
}: {
  data: FeaturesSection[] | undefined;
}) {
  console.log("Course Features Data:", data);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {data?.[0]?.name || "কোর্সটি যেভাবে সাজানো হয়েছে"}
        </h2>

        <div className="bg-gray-800 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data?.[0]?.values?.map((feature) => {
              return (
                <div key={feature.id} className="flex items-start gap-4">
                  <div className={`rounded-full p-3`}>
                    <Image
                      src={feature.icon}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                      alt=""
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[18px] font-[500px] leading-[26px] text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
