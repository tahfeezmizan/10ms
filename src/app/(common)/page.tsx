/* eslint-disable @typescript-eslint/no-explicit-any */

import CourseAccordion from "@/components/home/course-accordion";
import { CourseCard } from "@/components/home/course-card";
import CourseFeatures from "@/components/home/course-features";
import CourseHeading from "@/components/home/course-heading";
import CourseInstructor from "@/components/home/course-instructor";
import ExclusiveFeatures from "@/components/home/exclusive-features";
import FreePdfSection from "@/components/home/free-pdf-section";
import LearningOutcomes from "@/components/home/learning-outcomes";
import SectionSlider from "@/components/home/section-slider";
import {
  AboutSection,
  FeatureExplanationsSection,
  FeaturesSection,
  GroupJoinEngagementSection,
  InstructorsSection,
  PointersSection,
} from "@/typss/common";

export default async function page() {
  const data = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course"
  );

  const res = await data.json();
  const courseData = res.data;
  const instractorData = courseData?.sections;

  type SectionItem = { type: string; [key: string]: any };

  const coursesInstructors = (
    instractorData as InstructorsSection[] | undefined
  )?.filter((item: SectionItem) => item.type === "instructors");

  const accordionData = (instractorData as AboutSection[] | undefined)?.filter(
    (item: SectionItem) => item.type === "about"
  );

  const featuresData = (
    instractorData as FeaturesSection[] | undefined
  )?.filter((item: SectionItem) => item.type === "features");

  const ieltsConfirm = (
    instractorData as GroupJoinEngagementSection[] | undefined
  )?.filter((item: SectionItem) => item.type === "group_join_engagement");

  const coursesPointers = (
    instractorData as PointersSection[] | undefined
  )?.filter((item: SectionItem) => item.type === "pointers");

  const exclusiveFeaturesData = (
    instractorData as FeatureExplanationsSection[] | undefined
  )?.filter((item: SectionItem) => item.type === "feature_explanations");

  console.log("Course Data", exclusiveFeaturesData);

  return (
    <div className="">
      <CourseHeading data={courseData} />

      <div className="max-w-[1200px] container mx-auto p-4 md:pb-0 grid grid-cols-1 md:grid-cols-4 row-reverse gap-5  md:pt-8  ">
        <div className="col-span-1 md:col-span-3 space-y-3 ">
          <SectionSlider data={instractorData} />
          <CourseInstructor data={coursesInstructors} />
          <CourseFeatures data={featuresData} />
          <FreePdfSection data={ieltsConfirm} />
          <LearningOutcomes data={coursesPointers} />
          <CourseAccordion data={accordionData} />
          <ExclusiveFeatures data={exclusiveFeaturesData} />
        </div>

        <div className="col-span-1 ">
          <div className="sticky top-14 bg-white z-10 ">
            <CourseCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
