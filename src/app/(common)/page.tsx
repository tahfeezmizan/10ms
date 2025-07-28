import CourseAccordion from "@/components/home/course-accordion";
import CourseFeatures from "@/components/home/course-features";
import CourseHeading from "@/components/home/course-heading";
import CourseInstructor from "@/components/home/course-instructor";
import FreePdfSection from "@/components/home/free-pdf-section";
import LearningOutcomes from "@/components/home/learning-outcomes";
import SectionSlider from "@/components/home/section-slider";
import { InstructorsSection, PointersSection } from "@/typss/common";

export default async function page() {
  let data = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course"
  );

  let res = await data.json();
  const courseData = res.data;
  const instractorData = courseData?.sections;

  type SectionItem = { type: string; [key: string]: any };

  const coursesInstructors = (
    instractorData as InstructorsSection[] | undefined
  )?.filter((item: SectionItem) => item.type === "instructors");

  const courseFeatures = (instractorData as SectionItem[] | undefined)?.filter(
    (item: SectionItem) => item.type === "about"
  );

  const coursesPointers = (
    instractorData as PointersSection[] | undefined
  )?.filter((item: SectionItem) => item.type === "pointers");

  // console.log("Course Data", courseFeatures);

  return (
    <div className="">
      <CourseHeading data={courseData} />

      <div className="max-w-[1200px] container mx-auto p-4 md:pb-0 grid grid-cols-1 md:grid-cols-4 row-reverse gap-5 items-center md:pt-8  ">
        <div className="col-span-1 md:col-span-3 space-y-3">
          <SectionSlider data={instractorData} />
          <CourseInstructor data={coursesInstructors} />
          <CourseFeatures />
          <FreePdfSection />
          <LearningOutcomes data={coursesPointers} />
          <CourseAccordion data={courseFeatures} />
        </div>

        <div className="col-span-1 "></div>
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
