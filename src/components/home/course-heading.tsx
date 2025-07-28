import { CourseData } from "@/typss/common";
import ImageCarousel from "./image-carousel";

export default function CourseHeading({ data }: { data: CourseData }) {
  
  const mediaData = data?.media || [];


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
      <div className="max-w-[1200px] container mx-auto grid grid-cols-4 items-center md:gap-12 pb-6 md:py-10 min-h-60 ">
        <div className="col-span-3 gap-2">
          <h1 className="text-white mb-2 text-xl font-semibold  md:text-4xl">
            {data?.title}
          </h1>
          <p className="tenms__paragraph text-gray-400 " dir="ltr">
            <span
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{ __html: data?.description }}
            ></span>
          </p>
        </div>

        <div className="col-span-1 ">
          <ImageCarousel data={mediaData} />
        </div>
      </div>
    </div>
  );
}
