import CourseHeading from "@/components/course-heading";
import { json } from "stream/consumers";

export default async function page() {
  let data = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course"
  );

  let res = await data.json();
  const courseData = res.data;

  return (
    <div className="">
      <CourseHeading data={courseData} />
      
    </div>
  );
}

export const dynamic = "force-dynamic";
