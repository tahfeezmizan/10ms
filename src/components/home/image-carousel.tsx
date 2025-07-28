"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseData } from "@/typss/common";

export default function ImageCarousel({ data }: { data: CourseData }) {
  const mediaData = data?.media;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mediaData.length);
    setShowVideo(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mediaData.length) % mediaData.length);
    setShowVideo(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setShowVideo(false);
  };

  const handlePlayVideo = () => {
    if (mediaData[currentSlide].resource_type === "video") {
      setShowVideo(true);
    }
  };

  const currentMedia = mediaData[currentSlide];

  return (
    <div className="mx-auto ">
      <div className="relative w-auto md:w-96 bg-transparent md:bg-white p-1.5 overflow-hidden">
        {/* Main display area */}
        <div className="relative max-w-auto h-60 border ">
          {showVideo && currentMedia.resource_type === "video" ? (
            <iframe
              src={`https://www.youtube.com/embed/${currentMedia.resource_value}?autoplay=1`}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              <img
                src={
                  currentMedia.resource_type === "image"
                    ? currentMedia.resource_value
                    : currentMedia.thumbnail_url || "/placeholder.svg"
                }
                alt={currentMedia.name || `Slide ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Play button */}
              {currentMedia.resource_type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white rounded-full"
                    onClick={handlePlayVideo}
                  >
                    <Play className="h-8 w-8 text-primary" fill="white" />
                  </Button>
                </div>
              )}
            </>
          )}

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
        <div className="p-4 pl-2 bg-transparent md:bg-white">
          <div className="flex gap-2">
            {mediaData?.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-20 h-12 overflow-hidden border-2 transition-all ${
                  currentSlide === index
                    ? "border-primary rounded-md ring-2 ring-green-200"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img
                  src={
                    slide.resource_type === "image"
                      ? slide.resource_value
                      : slide.thumbnail_url || "/placeholder.svg"
                  }
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
