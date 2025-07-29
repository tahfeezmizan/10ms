import { CourseData } from "@/typss/common";
import ImageCarousel from "./image-carousel";

export default function CourseHeading({ data }: { data: CourseData }) {
  return (
    <div
      className="text-white"
      style={{
        backgroundImage:
          "url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1200px] container mx-auto p-4 md:pb-0 grid grid-cols-1 md:grid-cols-4 row-reverse gap-5 items-center md:pt-8  ">
        <div className="col-span-1 md:col-span-3 ">
          <h1 className="text-white mb-2 text-xl font-semibold  md:text-4xl">
            {data?.title}
          </h1>
          <p className=" tenms__paragraph text-gray-400" dir="ltr">
            <span
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{ __html: data?.description }}
            ></span>
          </p>
        </div>

        <div className="col-span-1 md:-mb-10">
          <ImageCarousel data={data} />
        </div>
      </div>
    </div>
  );
}
