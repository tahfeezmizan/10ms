"use client";

import { Button } from "@/components/ui/button";
import { GroupJoinEngagementSection } from "@/typss/common";
import { Download } from "lucide-react";
import Image from "next/image";

export default function FreePdfSection({
  data,
}: {
  data?: GroupJoinEngagementSection[];
}) {
  const handleDownload = () => {
    console.log("PDF download initiated");
  };

  const bg = data?.[0]?.values[0]?.background?.image;

  return (
    <div className="max-w-full mx-auto p-6">
      {/* Free PDF Section */}
      <div
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-black via-purple-900 to-blue-900 p-8 md:p-12"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Image
                src={
                  data?.[0]?.values[0]?.top_left_icon_img || "/placeholder.png"
                }
                alt="Free PDF"
                className="w-44 "
                width={100}
                height={100}
              />
            </div>

            <h2 className="text-xl font-semibold text-white">
              {data?.[0]?.values[0]?.title}
            </h2>

            <p className="text-base text-white">
              {data?.[0]?.values[0]?.description}
            </p>

            <Button
              onClick={handleDownload}
              className="pt-6 bg-primary hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all duration-200 transform hover:scale-105"
            >
              <Download className="h-5 w-5 mr-2" />
              ফ্রি PDF Download করুন
            </Button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src={data?.[0]?.values[0]?.thumbnail || "/placeholder.png"}
              alt="PDF Preview"
              width={300}
              height={200}
            />
          </div>
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
