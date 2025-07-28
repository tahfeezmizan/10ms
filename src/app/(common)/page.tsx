import CourseHeading from "@/components/home/course-heading";

export default async function page() {
  let data = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course"
  );

  let res = await data.json();
  const courseData = res.data;
  console.log("Course Data", courseData?.sections);
  const sections = courseData?.sections || [];

  return (
    <div className="">
      <CourseHeading data={courseData} />
      
    </div>
  );
}

export const dynamic = "force-dynamic";
