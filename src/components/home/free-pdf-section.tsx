"use client";

import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FreePdfSection() {
  const handleDownload = () => {
    console.log("PDF download initiated");
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Free PDF Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-black via-purple-900 to-blue-900 p-8 md:p-12">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Free PDF Badge */}
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 rounded-lg p-2">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <span className="text-orange-400 text-xl font-bold">
                Free PDF
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              IELTS Confirm 7+ Score
              <br />
              <span className="text-gray-300">(Guideline)</span>
            </h2>

            {/* Bengali Description */}
            <p className="text-gray-300 text-lg">
              IELTS ভালো score করার সেরা Strategies
              <br />
              আপনি সেখানে পাইতেছেন।
            </p>

            {/* Download Button */}
            <Button
              onClick={handleDownload}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all duration-200 transform hover:scale-105"
            >
              <Download className="h-5 w-5 mr-2" />
              ফ্রি PDF Download করুন
            </Button>
          </div>

          {/* Right Content - PDF Preview */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-lg p-4 shadow-2xl max-w-sm">
              <div className="bg-gray-100 rounded-lg p-4">
                {/* PDF Preview Placeholder */}
                <div className="space-y-3">
                  <div className="text-center text-sm font-semibold text-gray-800 mb-4">
                    এই strategies কাজে লাগিয়ে তারা ৭+ পেয়েছে
                  </div>

                  {/* Student Success Grid */}
                  <div className="grid grid-cols-5 gap-2">
                    {Array.from({ length: 15 }).map((_, index) => (
                      <div key={index} className="text-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-1 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {String.fromCharCode(65 + (index % 26))}
                          </span>
                        </div>
                        <div className="bg-red-500 text-white text-xs px-1 py-0.5 rounded">
                          {7 + Math.random() * 2 > 8 ? "8.5" : "7.5"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
