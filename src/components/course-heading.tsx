import { CourseHead } from "@/typss/common";
import React from "react";

export default function CourseHeading({ data }: { data: CourseHead }) {
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
      <div className="container mx-auto flex flex-col gap-4 md:flex-row items-center md:gap-12 pb-6 md:py-10 min-h-60">
        <div className="max-w-2xl">
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
      </div>
    </div>
  );
}
