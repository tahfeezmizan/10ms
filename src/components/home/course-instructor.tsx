import { Card, CardContent } from "@/components/ui/card";
import { InstructorsSection } from "@/typss/common";
import Image from "next/image";

export default function CourseInstructor({
  data,
}: {
  data?: InstructorsSection[];
}) {
  return (
    <div className=" p-6">
      <div className="space-y-4">
        <h2 className="mb-4 text-xl font-semibold md:text-2xl">
          {data?.[0]?.name || "কোর্স ইন্সট্রাক্টর"}
        </h2>

        {/* Instructor Card */}
        <Card className="py-0 rounded-lg">
          <CardContent className="p-4 shadow-none">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-24 h-2w-24 rounded-full overflow-hidden ">
                  {data?.[0]?.values?.map((instructor, index) => (
                    <div key={index} className="instructor-card">
                      {/* <Image
                        src={instructor.image}
                        alt={instructor.name}
                        width="400"
                        height="400"
                        className="w-full h-full object-cover rounded-full"                        
                      /> */}
                      <Image
                        src={instructor.image}
                        alt={instructor.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructor Information */}
              <div className="flex-1">
                {data?.[0]?.values?.map((instructor, index) => (
                  <div key={index} className="instructor-card pb-0">
                    <h3>{instructor.name}</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: instructor.description,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
