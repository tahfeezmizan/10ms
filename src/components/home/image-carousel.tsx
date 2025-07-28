"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseData } from "@/typss/common";

// Sample data for the carousel
const carouselData = [
  {
    id: 1,
    image: "/images/slide1.png",
    title: "IELTS Course",
    description: "Course by MUNZEREEN SHAHID",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=400&width=600&text=Course+Materials",
    title: "Course Materials",
    description: "Study materials and resources",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=400&width=600&text=Practice+Tests",
    title: "Practice Tests",
    description: "Mock tests and exercises",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=400&width=600&text=Video+Lessons",
    title: "Video Lessons",
    description: "Interactive video content",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=400&width=600&text=Overview",
    title: "Course Overview",
    description: "Complete course structure",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=400&width=600&text=Instructor",
    title: "Meet Your Instructor",
    description: "Expert guidance and support",
  },
];

export default function ImageCarousel({
  mediaData,
}: {
  mediaData: CourseData;
}) {

    console.log("Media Data:", mediaData)
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  // Function to go to specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className=" mx-auto p-4">
      {/* Main carousel container */}
      <div className="relative w-80 bg-white  p-1 border-red-400 border-2 overflow-hidden">
        {/* Main image display */}
        <div className="relative border max-w-auto h-60 border-green-400 bg-gray-100">
          <img
            src={carouselData[currentSlide].image || "/placeholder.svg"}
            alt={carouselData[currentSlide].title}
            className="w-full h-full object-cover"
          />

          {/* Play button overlay (for video content) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              size="lg"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4"
            >
              <Play className="h-8 w-8 text-white" fill="white" />
            </Button>
          </div>

          {/* Left arrow */}
          <Button
            onClick={prevSlide}
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 text-black -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-md"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Right arrow */}
          <Button
            onClick={nextSlide}
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-black bg-white/80 hover:bg-white rounded-full shadow-md"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Thumbnail navigation */}
        <div className="p-4 bg-white">
          <div className="flex gap-2">
            {carouselData.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-20 h-12  overflow-hidden border-2 transition-all ${
                  currentSlide === index
                    ? "border-primary rounded-md ring-2 ring-green-200"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
